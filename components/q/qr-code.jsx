import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q4yhjob_q.css';
import '../../css/s/su_j4xs_x.css';
import '../../css/j/js8xzdbuz.css';
import '../../css/e/e_rlgbb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q4yhjob_q"/><path class="su_j4xs_x"/><path class="js8xzdbuz"/><path class="e_rlgbb6x"/></g>`,
		"fallback": "iconaut:qr-code",
	});
}

export default Component;
