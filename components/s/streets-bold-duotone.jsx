import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcaaw--es.css';
import '../../css/k/km6q1bmez.css';
import '../../css/u/ut5j5mboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcaaw--es"/><path class="km6q1bmez"/><path class="ut5j5mboq"/></g>`,
		"fallback": "solar:streets-bold-duotone",
	});
}

export default Component;
