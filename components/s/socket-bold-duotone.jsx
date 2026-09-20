import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/c/cg8ub0ubl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path clip-rule="evenodd" class="cg8ub0ubl"/></g>`,
		"fallback": "solar:socket-bold-duotone",
	});
}

export default Component;
