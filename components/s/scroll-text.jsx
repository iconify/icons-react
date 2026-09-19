import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcnhie19y.css';
import '../../css/e/esoc3gbtn.css';
import '../../css/n/nyouw_b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path clip-rule="evenodd" class="pcnhie19y"/><path class="esoc3gbtn"/><path class="nyouw_b1f"/></g>`,
		"fallback": "hugeicons:scroll-text",
	});
}

export default Component;
