import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zcmestv1x.css';
import '../../css/w/w_3ky1b1v.css';
import '../../css/e/e_d3ajbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zcmestv1x"/><path class="w_3ky1b1v"/><path class="e_d3ajbae"/></g>`,
		"fallback": "hugeicons:store-04",
	});
}

export default Component;
