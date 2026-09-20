import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sgr_f8btx.css';
import '../../css/m/mzgayy21e.css';
import '../../css/i/iu2_5aclf.css';
import '../../css/x/xa3dxb-md.css';
import '../../css/p/p2fvfob4y.css';
import '../../css/h/h0mdmlb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sgr_f8btx"/><path class="mzgayy21e"/><path class="iu2_5aclf"/><path class="xa3dxb-md"/><path class="p2fvfob4y"/><path class="h0mdmlb_j"/></g>`,
		"fallback": "solar:projector-linear",
	});
}

export default Component;
