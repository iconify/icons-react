import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rdqyx1m-i.css';
import '../../css/k/k75sbgkul.css';
import '../../css/h/hrbbo3b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rdqyx1m-i"/><path class="k75sbgkul"/><path class="hrbbo3b9y"/></g>`,
		"fallback": "hugeicons:paint-roller",
	});
}

export default Component;
