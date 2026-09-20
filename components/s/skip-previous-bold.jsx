import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-dtt0w7k.css';
import '../../css/i/i8-r61_oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-dtt0w7k"/><path class="i8-r61_oy"/></g>`,
		"fallback": "solar:skip-previous-bold",
	});
}

export default Component;
