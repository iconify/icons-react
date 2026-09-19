import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q9-1_4xgj.css';
import '../../css/r/r0tbypa-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q9-1_4xgj"/><path class="r0tbypa-k"/></g>`,
		"fallback": "hugeicons:square-split-horizontal",
	});
}

export default Component;
