import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cr_k_qy7u.css';
import '../../css/q/qtsvlnboq.css';
import '../../css/g/gh87bhbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cr_k_qy7u"/><path class="qtsvlnboq"/><path class="gh87bhbpq"/></g>`,
		"fallback": "tdesign:sim-card-1",
	});
}

export default Component;
