import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gy678_ybm.css';
import '../../css/d/dwl0t3b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.27 15.78)" class="gy678_ybm"/><path class="dwl0t3b_y"/></g>`,
		"fallback": "andrsrxn:screen-contract-horizontally",
	});
}

export default Component;
