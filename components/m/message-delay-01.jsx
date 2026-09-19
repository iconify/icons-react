import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ic-ofhbyf.css';
import '../../css/y/ygv62qcsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ic-ofhbyf"/><path class="ygv62qcsc"/></g>`,
		"fallback": "hugeicons:message-delay-01",
	});
}

export default Component;
