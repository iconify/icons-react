import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2ra9zmqo.css';
import '../../css/r/rbrqs4bqf.css';
import '../../css/f/fedou6bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e2ra9zmqo"/><path class="rbrqs4bqf"/><path class="fedou6bod"/></g>`,
		"fallback": "solar:routing-3-bold",
	});
}

export default Component;
