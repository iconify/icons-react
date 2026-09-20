import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oev5u6b2s.css';
import '../../css/b/b_qgwqbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oev5u6b2s"/><path class="b_qgwqbrh"/></g>`,
		"fallback": "solar:rewind-forward-linear",
	});
}

export default Component;
