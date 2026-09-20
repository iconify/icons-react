import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/q/qbw24p3lz.css';
import '../../css/u/uqwall-9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="qbw24p3lz"/><path class="uqwall-9p"/></g>`,
		"fallback": "solar:round-sort-horizontal-bold-duotone",
	});
}

export default Component;
