import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qje5tacdi.css';
import '../../css/d/d5p1ub79d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qje5tacdi"/><path class="d5p1ub79d"/></g>`,
		"fallback": "coolicons:path-bulk-round",
	});
}

export default Component;
