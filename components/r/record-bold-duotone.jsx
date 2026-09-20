import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nc9xqi5th.css';
import '../../css/j/j7vnprnay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="nc9xqi5th"/><path clip-rule="evenodd" class="j7vnprnay"/></g>`,
		"fallback": "solar:record-bold-duotone",
	});
}

export default Component;
