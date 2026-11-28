import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zy_lot6io.css';
import '../../css/p/p-36-zbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zy_lot6io"/><path class="p-36-zbic"/></g>`,
		"fallback": "iconaut:tv-solid",
	});
}

export default Component;
