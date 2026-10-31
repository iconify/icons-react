import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5-xrfb7g.css';
import '../../css/i/iu2-f601h.css';
import '../../css/i/iu8dl5byo.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5-xrfb7g"/><path class="iu2-f601h"/><path class="iu8dl5byo"/></g>`,
		"fallback": "cif:td",
	});
}

export default Component;
