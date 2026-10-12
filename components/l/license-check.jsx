import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cio8mhbpo.css';
import '../../css/k/kj51nbk4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cio8mhbpo"/><path class="kj51nbk4y"/></g>`,
		"fallback": "andrsrxn:license-check",
	});
}

export default Component;
