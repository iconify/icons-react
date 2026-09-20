import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dd2lanbmx.css';
import '../../css/z/z3r7pxdhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dd2lanbmx"/><path class="z3r7pxdhc"/></g>`,
		"fallback": "solar:laptop-minimalistic-bold",
	});
}

export default Component;
