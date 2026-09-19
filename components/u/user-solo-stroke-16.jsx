import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tc3hrxbmr.css';
import '../../css/x/xho4_r_6q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="tc3hrxbmr"/><path class="xho4_r_6q"/></g>`,
		"fallback": "garden:user-solo-stroke-16",
	});
}

export default Component;
