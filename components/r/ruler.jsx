import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a_u5edciz.css';
import '../../css/o/okxjnkbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a_u5edciz"/><path class="okxjnkbvf"/></g>`,
		"fallback": "hugeicons:ruler",
	});
}

export default Component;
