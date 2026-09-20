import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/p/p4tdawz1x.css';
import '../../css/h/h3eh08byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="p4tdawz1x"/><path class="h3eh08byi"/></g>`,
		"fallback": "solar:square-transfer-vertical-linear",
	});
}

export default Component;
