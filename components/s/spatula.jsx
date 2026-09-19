import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uec01kf8p.css';
import '../../css/q/qr3wp_k8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uec01kf8p"/><path class="qr3wp_k8c"/></g>`,
		"fallback": "hugeicons:spatula",
	});
}

export default Component;
