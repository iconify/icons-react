import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9zqj8qqo.css';
import '../../css/r/regd8c15q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x9zqj8qqo"/><path class="regd8c15q"/></g>`,
		"fallback": "solar:power-bold",
	});
}

export default Component;
