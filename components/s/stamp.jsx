import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c8q0k3b_u.css';
import '../../css/s/swpy8_b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c8q0k3b_u"/><path class="swpy8_b7v"/></g>`,
		"fallback": "andrsrxn:stamp",
	});
}

export default Component;
