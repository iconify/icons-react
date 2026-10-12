import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yedt1ug9b.css';
import '../../css/h/hyo-aabqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yedt1ug9b"/><path class="hyo-aabqc"/></g>`,
		"fallback": "andrsrxn:send-filled",
	});
}

export default Component;
