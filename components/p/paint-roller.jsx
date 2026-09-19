import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4o7txbth.css';
import '../../css/y/yb1r0frkf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x4o7txbth"/><path class="yb1r0frkf"/></g>`,
		"fallback": "at-icons:paint-roller",
	});
}

export default Component;
