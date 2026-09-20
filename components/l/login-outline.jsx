import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c57g1kbzh.css';
import '../../css/n/nyc1r28nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c57g1kbzh"/><path class="nyc1r28nv"/></g>`,
		"fallback": "solar:login-outline",
	});
}

export default Component;
