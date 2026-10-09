import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq4q6o5xn.css';
import '../../css/p/p72eb_bpu.css';
import '../../css/t/ty8c60bpt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq4q6o5xn"/><path class="p72eb_bpu"/><path class="ty8c60bpt"/>`,
		"fallback": "energy-icons:jack-up-vessel-20",
	});
}

export default Component;
