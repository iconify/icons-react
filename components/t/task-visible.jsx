import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpwpjwbdv.css';
import '../../css/i/ifdy2ucqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpwpjwbdv"/><path class="ifdy2ucqr"/></g>`,
		"fallback": "tdesign:task-visible",
	});
}

export default Component;
