import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9u6u1b0k.css';
import '../../css/x/x-crcwbkc.css';
import '../../css/x/x-1ih7_lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="e9u6u1b0k"/><path class="x-crcwbkc"/><path class="x-1ih7_lf"/></g>`,
		"fallback": "andrsrxn:timer-reload",
	});
}

export default Component;
