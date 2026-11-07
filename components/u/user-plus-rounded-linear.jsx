import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/l/ll9hsm7xd.css';
import '../../css/u/uvor06boi.css';
import '../../css/r/rdnf-acrq.css';
import '../../css/m/mmetfzbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="ll9hsm7xd"/><path class="uvor06boi"/><path class="rdnf-acrq"/><path class="mmetfzbec"/></g>`,
		"fallback": "solar:user-plus-rounded-linear",
	});
}

export default Component;
