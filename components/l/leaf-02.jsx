import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e-dsss6rx.css';
import '../../css/w/wzvw52l1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e-dsss6rx"/><path class="wzvw52l1z"/></g>`,
		"fallback": "hugeicons:leaf-02",
	});
}

export default Component;
