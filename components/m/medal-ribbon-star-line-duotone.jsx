import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p-qrmibls.css';
import '../../css/i/i6nrt8nnu.css';
import '../../css/e/ey97octmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p-qrmibls"/><path class="i6nrt8nnu"/><path class="ey97octmt"/></g>`,
		"fallback": "solar:medal-ribbon-star-line-duotone",
	});
}

export default Component;
