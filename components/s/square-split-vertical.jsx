import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdcuavt1y.css';
import '../../css/d/dp2e43flw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdcuavt1y"/><path class="dp2e43flw"/></g>`,
		"fallback": "hugeicons:square-split-vertical",
	});
}

export default Component;
