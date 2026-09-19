import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s46c2220x.css';
import '../../css/w/wr28_ubwm.css';
import '../../css/b/be91r0mqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s46c2220x"/><path class="wr28_ubwm"/><path class="be91r0mqb"/></g>`,
		"fallback": "hugeicons:square-lock-add-01",
	});
}

export default Component;
