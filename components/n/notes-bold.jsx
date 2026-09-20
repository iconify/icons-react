import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cr36wrb2y.css';
import '../../css/j/jop_3j-fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cr36wrb2y"/><path clip-rule="evenodd" class="jop_3j-fw"/></g>`,
		"fallback": "solar:notes-bold",
	});
}

export default Component;
