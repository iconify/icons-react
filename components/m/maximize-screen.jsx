import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sktv96bcg.css';
import '../../css/c/cpnpxp9kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sktv96bcg"/><path class="cpnpxp9kl"/></g>`,
		"fallback": "hugeicons:maximize-screen",
	});
}

export default Component;
