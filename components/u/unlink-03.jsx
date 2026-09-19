import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/me0qxyb1b.css';
import '../../css/u/uvtxp-bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="me0qxyb1b"/><path class="uvtxp-bvf"/></g>`,
		"fallback": "hugeicons:unlink-03",
	});
}

export default Component;
