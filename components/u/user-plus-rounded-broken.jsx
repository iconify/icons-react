import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/k/ki7qe_bva.css';
import '../../css/o/ojuucacgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="ki7qe_bva"/><path class="ojuucacgy"/></g>`,
		"fallback": "solar:user-plus-rounded-broken",
	});
}

export default Component;
