import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dlwu4rc2k.css';
import '../../css/u/uebd-hbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dlwu4rc2k"/><path class="uebd-hbog"/></g>`,
		"fallback": "hugeicons:legal-hammer",
	});
}

export default Component;
