import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/es7zteblh.css';
import '../../css/o/ooanwtmpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="es7zteblh"/><path class="ooanwtmpl"/></g>`,
		"fallback": "solar:square-dashed-bold-duotone",
	});
}

export default Component;
