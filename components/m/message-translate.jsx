import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fdvahlowc.css';
import '../../css/l/ltsg-qbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fdvahlowc"/><path class="ltsg-qbcd"/></g>`,
		"fallback": "hugeicons:message-translate",
	});
}

export default Component;
