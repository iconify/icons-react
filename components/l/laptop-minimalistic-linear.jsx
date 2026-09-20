import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgy-6rbgh.css';
import '../../css/m/mbp_w6jfq.css';
import '../../css/i/im1hkobej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hgy-6rbgh"/><path class="mbp_w6jfq"/><path class="im1hkobej"/></g>`,
		"fallback": "solar:laptop-minimalistic-linear",
	});
}

export default Component;
