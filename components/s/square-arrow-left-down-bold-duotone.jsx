import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yaehxpb_q.css';
import '../../css/u/ucx9fy1go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yaehxpb_q"/><path class="ucx9fy1go"/></g>`,
		"fallback": "solar:square-arrow-left-down-bold-duotone",
	});
}

export default Component;
