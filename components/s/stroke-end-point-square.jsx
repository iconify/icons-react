import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl-oqybpa.css';
import '../../css/m/mjf7cybbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cl-oqybpa"/><path class="mjf7cybbz"/></g>`,
		"fallback": "andrsrxn:stroke-end-point-square",
	});
}

export default Component;
