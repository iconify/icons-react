import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryw_qxplx.css';
import '../../css/i/intizwbyl.css';
import '../../css/r/r_fe4p1lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ryw_qxplx"/><path class="intizwbyl"/><path class="r_fe4p1lj"/></g>`,
		"fallback": "andrsrxn:mountain",
	});
}

export default Component;
