import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhwezzbsp.css';
import '../../css/b/b_21f101v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhwezzbsp"/><path class="b_21f101v"/>`,
		"fallback": "energy-icons:tanker-truck-20",
	});
}

export default Component;
