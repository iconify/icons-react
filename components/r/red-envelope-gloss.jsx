import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qt_knybjc.css';
import '../../css/e/espm2tfnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qt_knybjc wm-k"/><path class="espm2tfnt wm-s"/></g>`,
		"fallback": "withicons:red-envelope-gloss",
	});
}

export default Component;
