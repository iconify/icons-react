import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flx_1qb4h.css';
import '../../css/v/v23-cdbde.css';
import '../../css/z/ze-uymb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="flx_1qb4h"/><path class="v23-cdbde"/><path class="ze-uymb1y"/></g>`,
		"fallback": "andrsrxn:rotate-360-right",
	});
}

export default Component;
