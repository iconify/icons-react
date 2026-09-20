import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hlow8tbhl.css';
import '../../css/b/b2z-3ibpy.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="hlow8tbhl"/><path class="b2z-3ibpy"/></g>`,
		"fallback": "system-uicons:trash-alt",
	});
}

export default Component;
