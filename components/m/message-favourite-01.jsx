import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qr37k9brc.css';
import '../../css/i/ig-w9ub_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qr37k9brc"/><path class="ig-w9ub_t"/></g>`,
		"fallback": "hugeicons:message-favourite-01",
	});
}

export default Component;
