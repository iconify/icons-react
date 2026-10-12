import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tb9m1rbgm.css';
import '../../css/i/i-b5_50xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tb9m1rbgm"/><path class="i-b5_50xk"/></g>`,
		"fallback": "andrsrxn:sun-down",
	});
}

export default Component;
