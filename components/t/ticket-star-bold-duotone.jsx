import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvx_hvkwu.css';
import '../../css/n/nqhgbgggh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uvx_hvkwu"/><path class="nqhgbgggh"/></g>`,
		"fallback": "solar:ticket-star-bold-duotone",
	});
}

export default Component;
