import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxoq449ow.css';
import '../../css/x/xsclj8l7b.css';
import '../../css/k/kam5h0j4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hxoq449ow"/><path class="xsclj8l7b"/><path class="kam5h0j4d"/></g>`,
		"fallback": "andrsrxn:paycheck-check",
	});
}

export default Component;
