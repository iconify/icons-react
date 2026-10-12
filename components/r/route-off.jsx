import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs7nt4bkd.css';
import '../../css/t/tc792ph1v.css';
import '../../css/l/l-u_2bbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(1 0 0 -1 16.07 8.36)" class="fs7nt4bkd"/><circle transform="matrix(1 0 0 -1 2.51 21.06)" class="fs7nt4bkd"/><circle transform="matrix(1 0 0 -1 16.07 8.36)" class="tc792ph1v"/><circle transform="matrix(1 0 0 -1 2.51 21.06)" class="tc792ph1v"/><path class="l-u_2bbvd"/></g>`,
		"fallback": "andrsrxn:route-off",
	});
}

export default Component;
