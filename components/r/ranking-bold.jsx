import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6ymqxsfn.css';
import '../../css/s/sbmqfhzny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6ymqxsfn"/><path class="sbmqfhzny"/></g>`,
		"fallback": "solar:ranking-bold",
	});
}

export default Component;
