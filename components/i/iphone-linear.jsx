import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gy5n-26px.css';
import '../../css/e/erekrcbav.css';
import '../../css/t/thfd6zb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gy5n-26px"/><path class="erekrcbav"/><path class="thfd6zb1r"/></g>`,
		"fallback": "solar:iphone-linear",
	});
}

export default Component;
