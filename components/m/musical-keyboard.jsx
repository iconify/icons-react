import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzklix2ac.css';
import '../../css/e/ely8642xy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x38xcickk.css';
import '../../css/o/ob77ulb_f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzklix2ac"/><path class="ely8642xy"/><g class="ij2x_72vy"><path class="x38xcickk"/><path class="ob77ulb_f"/></g>`,
		"fallback": "openmoji:musical-keyboard",
	});
}

export default Component;
