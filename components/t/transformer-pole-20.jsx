import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-9xc2bcj.css';
import '../../css/m/mxnl1347f.css';
import '../../css/g/g9pwdi6pr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-9xc2bcj"/><path class="mxnl1347f"/><path class="g9pwdi6pr"/>`,
		"fallback": "energy-icons:transformer-pole-20",
	});
}

export default Component;
