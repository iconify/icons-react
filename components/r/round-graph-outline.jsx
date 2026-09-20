import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axm7mdb8n.css';
import '../../css/u/uxddagbff.css';
import '../../css/p/p-tl4pbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="axm7mdb8n"/><path class="uxddagbff"/><path class="p-tl4pbfr"/></g>`,
		"fallback": "solar:round-graph-outline",
	});
}

export default Component;
