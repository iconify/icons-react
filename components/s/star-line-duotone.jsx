import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uw8_k_kmg.css';
import '../../css/a/a011i4nqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uw8_k_kmg"/><path class="a011i4nqx"/></g>`,
		"fallback": "solar:star-line-duotone",
	});
}

export default Component;
