import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxjjl5kkt.css';
import '../../css/u/u4vu1vb4p.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxjjl5kkt"/><path class="u4vu1vb4p"/></g>`,
		"fallback": "jam:npm",
	});
}

export default Component;
