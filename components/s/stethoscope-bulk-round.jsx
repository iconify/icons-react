import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejfagnbsy.css';
import '../../css/j/jrm76tm4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejfagnbsy"/><path class="jrm76tm4n"/></g>`,
		"fallback": "coolicons:stethoscope-bulk-round",
	});
}

export default Component;
