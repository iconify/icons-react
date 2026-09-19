import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gj28nybrd.css';
import '../../css/q/qo6-qpbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gj28nybrd"/><path class="qo6-qpbek"/></g>`,
		"fallback": "hugeicons:leaf-03",
	});
}

export default Component;
