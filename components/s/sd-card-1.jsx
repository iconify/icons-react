import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-x2ppbuv.css';
import '../../css/p/pam1afbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-x2ppbuv"/><path class="pam1afbvo"/></g>`,
		"fallback": "tdesign:sd-card-1",
	});
}

export default Component;
