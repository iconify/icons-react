import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zuag3sbip.css';
import '../../css/a/als0dek6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zuag3sbip"/><path class="als0dek6e"/></g>`,
		"fallback": "hugeicons:message-delay-01",
	});
}

export default Component;
