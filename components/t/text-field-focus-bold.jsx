import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w5qmrnruv.css';
import '../../css/u/ug8aypbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w5qmrnruv"/><path clip-rule="evenodd" class="ug8aypbxg"/></g>`,
		"fallback": "solar:text-field-focus-bold",
	});
}

export default Component;
