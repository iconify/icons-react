import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu425ypsg.css';
import '../../css/t/tx7xd1mih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iu425ypsg"/><path class="tx7xd1mih"/></g>`,
		"fallback": "andrsrxn:resend",
	});
}

export default Component;
