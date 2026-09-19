import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/i/iy9e42njx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="dtl23o_xq"/><path class="iy9e42njx"/></g>`,
		"fallback": "hugeicons:pin-location-03",
	});
}

export default Component;
