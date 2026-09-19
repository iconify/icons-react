import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sqgh40uxn.css';
import '../../css/l/llbpx1juk.css';
import '../../css/n/nm4ik8v_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sqgh40uxn"/><path class="llbpx1juk"/><path class="nm4ik8v_y"/></g>`,
		"fallback": "hugeicons:turtle",
	});
}

export default Component;
