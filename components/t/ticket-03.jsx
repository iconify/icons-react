import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/orsbbcbcm.css';
import '../../css/u/ukgi6526i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="orsbbcbcm"/><path class="ukgi6526i"/></g>`,
		"fallback": "hugeicons:ticket-03",
	});
}

export default Component;
