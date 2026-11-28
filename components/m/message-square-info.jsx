import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/a/a2iy3gbnm.css';
import '../../css/o/oyt003tzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dp12a2bii"/><path class="a2iy3gbnm"/><path class="oyt003tzr"/></g>`,
		"fallback": "iconaut:message-square-info",
	});
}

export default Component;
