import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rif5jcvyy.css';
import '../../css/m/m3xlfc_1e.css';
import '../../css/q/q0v-vmbei.css';

const viewBox = {"width":301,"height":189};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rif5jcvyy"/><path class="m3xlfc_1e"/><path class="q0v-vmbei"/></g>`,
		"fallback": "cif:se",
	});
}

export default Component;
