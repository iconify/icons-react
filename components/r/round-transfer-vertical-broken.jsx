import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p4tdawz1x.css';
import '../../css/h/h3eh08byi.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p4tdawz1x"/><path class="h3eh08byi"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:round-transfer-vertical-broken",
	});
}

export default Component;
