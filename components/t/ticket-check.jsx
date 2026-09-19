import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cgg9yv_9l.css';
import '../../css/o/orsbbcbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="cgg9yv_9l"/><path class="orsbbcbcm"/></g>`,
		"fallback": "hugeicons:ticket-check",
	});
}

export default Component;
