import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x--ca5puy.css';
import '../../css/d/d3y77ja1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x--ca5puy"/><path class="d3y77ja1y"/></g>`,
		"fallback": "solar:sticker-square-bold-duotone",
	});
}

export default Component;
