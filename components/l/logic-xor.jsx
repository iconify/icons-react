import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xasb3hfxj.css';
import '../../css/s/slskffx_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xasb3hfxj"/><path class="slskffx_h"/></g>`,
		"fallback": "andrsrxn:logic-xor",
	});
}

export default Component;
