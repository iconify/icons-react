import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/ggvf3nb4s.css';
import '../../css/c/cw0dg-bgf.css';
import '../../css/e/erekrcbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ggvf3nb4s"/><path class="cw0dg-bgf"/><path class="erekrcbav"/></g>`,
		"fallback": "solar:smartphone-update-broken",
	});
}

export default Component;
