import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t88j5qbod.css';
import '../../css/g/g4jfx9s0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t88j5qbod"/><path clip-rule="evenodd" class="g4jfx9s0y"/></g>`,
		"fallback": "healthicons:low-bars-negative",
	});
}

export default Component;
