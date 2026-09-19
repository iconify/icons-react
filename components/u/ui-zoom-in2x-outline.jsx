import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omsq8vbof.css';
import '../../css/f/fy1fthbfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="omsq8vbof"/><path clip-rule="evenodd" class="fy1fthbfq"/></g>`,
		"fallback": "healthicons:ui-zoom-in2x-outline",
	});
}

export default Component;
