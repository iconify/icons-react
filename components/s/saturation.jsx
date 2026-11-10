import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zo85uxb_v.css';
import '../../css/w/ww697fawm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zo85uxb_v"/><path class="ww697fawm"/></g>`,
		"fallback": "andrsrxn:saturation",
	});
}

export default Component;
