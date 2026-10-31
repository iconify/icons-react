import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0v0id9pz.css';
import '../../css/y/y_ekn01od.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0v0id9pz"/><path class="y_ekn01od"/></g>`,
		"fallback": "cif:ua",
	});
}

export default Component;
