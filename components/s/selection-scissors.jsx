import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f92nw-blc.css';
import '../../css/j/j9ksmnq7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f92nw-blc"/><path class="j9ksmnq7n"/></g>`,
		"fallback": "andrsrxn:selection-scissors",
	});
}

export default Component;
