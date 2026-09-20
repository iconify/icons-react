import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k95pln60o.css';
import '../../css/d/d5j1o4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k95pln60o"/><path class="d5j1o4bux"/></g>`,
		"fallback": "solar:syringe-bold",
	});
}

export default Component;
