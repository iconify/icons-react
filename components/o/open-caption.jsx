import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/as4eweb3g.css';
import '../../css/h/hahirzxrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="as4eweb3g"/><path class="hahirzxrr"/></g>`,
		"fallback": "hugeicons:open-caption",
	});
}

export default Component;
