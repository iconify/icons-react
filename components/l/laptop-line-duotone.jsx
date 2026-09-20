import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iqwgs_b2i.css';
import '../../css/w/wk0l59qvo.css';
import '../../css/q/qs6p1db2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iqwgs_b2i"/><path class="wk0l59qvo"/><path class="qs6p1db2l"/></g>`,
		"fallback": "solar:laptop-line-duotone",
	});
}

export default Component;
