import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yp_nnkb-k.css';
import '../../css/n/n59pclbpi.css';
import '../../css/k/keefnfbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yp_nnkb-k"/><path class="n59pclbpi"/><path class="keefnfbhm"/></g>`,
		"fallback": "andrsrxn:sun-uv",
	});
}

export default Component;
