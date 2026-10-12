import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3uekjbks.css';
import '../../css/u/u_t0_7bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3uekjbks"/><path class="u_t0_7bpl"/></g>`,
		"fallback": "andrsrxn:mirror",
	});
}

export default Component;
