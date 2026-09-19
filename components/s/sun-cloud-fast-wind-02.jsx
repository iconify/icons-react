import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q2tls94nn.css';
import '../../css/j/j2txpsbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q2tls94nn"/><path class="j2txpsbrb"/></g>`,
		"fallback": "hugeicons:sun-cloud-fast-wind-02",
	});
}

export default Component;
