import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d776ktq9r.css';
import '../../css/m/m4t5wlb6j.css';
import '../../css/c/c57e_irzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d776ktq9r"/><circle transform="rotate(90 11.97 12.3)" class="m4t5wlb6j"/><path class="c57e_irzp"/></g>`,
		"fallback": "andrsrxn:sun-fog",
	});
}

export default Component;
