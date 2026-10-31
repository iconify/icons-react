import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyv-x4b7s.css';
import '../../css/a/a-a2pf-ol.css';
import '../../css/i/ier9tha9r.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fyv-x4b7s"/><path class="a-a2pf-ol"/><path class="ier9tha9r"/></g>`,
		"fallback": "cif:ml",
	});
}

export default Component;
