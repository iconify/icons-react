import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsxa_3x8n.css';
import '../../css/f/fa1e0wb3i.css';
import '../../css/h/hmh1nvbga.css';
import '../../css/f/fvk4_ub_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsxa_3x8n"/><path class="fa1e0wb3i"/><path class="hmh1nvbga"/><path class="fvk4_ub_x"/></g>`,
		"fallback": "andrsrxn:summary-sparkle",
	});
}

export default Component;
