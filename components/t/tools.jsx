import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvfbjwbsp.css';
import '../../css/q/qf-b36b6q.css';
import '../../css/u/uld1ltb0f.css';
import '../../css/t/t_0wqmbvo.css';
import '../../css/g/g-vqucczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hvfbjwbsp"/><path class="qf-b36b6q"/><path class="uld1ltb0f"/><path class="t_0wqmbvo"/><path class="g-vqucczn"/></g>`,
		"fallback": "andrsrxn:tools",
	});
}

export default Component;
