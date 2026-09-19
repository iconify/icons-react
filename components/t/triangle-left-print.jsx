import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgroc4-5w.css';
import '../../css/d/db45sn91s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jgroc4-5w"/><path clip-rule="evenodd" class="db45sn91s"/></g>`,
		"fallback": "pepicons:triangle-left-print",
	});
}

export default Component;
