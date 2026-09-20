import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6h6l6ctn.css';
import '../../css/b/bv162rb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6h6l6ctn"/><path class="bv162rb1m"/></g>`,
		"fallback": "solar:traffic-outline",
	});
}

export default Component;
