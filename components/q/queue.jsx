import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv0k8b-6d.css';
import '../../css/a/axfb90wzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hv0k8b-6d"/><path class="axfb90wzm"/></g>`,
		"fallback": "andrsrxn:queue",
	});
}

export default Component;
