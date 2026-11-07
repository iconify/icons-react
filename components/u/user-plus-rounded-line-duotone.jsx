import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d49isd-3b.css';
import '../../css/r/rdnf-acrq.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/l/ll9hsm7xd.css';
import '../../css/u/uvor06boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d49isd-3b"/><path class="rdnf-acrq"/><circle class="dtl23o_xq"/><path class="ll9hsm7xd"/><path class="uvor06boi"/></g>`,
		"fallback": "solar:user-plus-rounded-line-duotone",
	});
}

export default Component;
