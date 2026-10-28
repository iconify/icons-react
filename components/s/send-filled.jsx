import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nitl08wtc.css';
import '../../css/t/tp36w_b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nitl08wtc"/><path class="tp36w_b3k"/></g>`,
		"fallback": "andrsrxn:send-filled",
	});
}

export default Component;
