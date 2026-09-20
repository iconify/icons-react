import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjx_gg_-u.css';
import '../../css/q/qx7-9t6ec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jjx_gg_-u"/><path class="qx7-9t6ec"/></g>`,
		"fallback": "solar:laptop-outline",
	});
}

export default Component;
