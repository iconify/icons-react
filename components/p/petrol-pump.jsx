import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cstjsmdqb.css';
import '../../css/e/epqlddxlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cstjsmdqb"/><path class="epqlddxlt"/></g>`,
		"fallback": "hugeicons:petrol-pump",
	});
}

export default Component;
