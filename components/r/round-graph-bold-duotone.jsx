import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hiqwxob7b.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hiqwxob7b"/><path class="uxddagbff"/><path class="p-tl4pbfr"/></g>`,
		"fallback": "solar:round-graph-bold-duotone",
	});
}

export default Component;
