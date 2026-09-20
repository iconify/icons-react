import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zl6ggob9r.css';
import '../../css/z/z-3-7paba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zl6ggob9r"/><path class="z-3-7paba"/></g>`,
		"fallback": "solar:text-italic-circle-linear",
	});
}

export default Component;
