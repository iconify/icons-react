import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w49i3xbiz.css';
import '../../css/f/f9osy1x0y.css';
import '../../css/i/iw2i09btv.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w49i3xbiz"/><path class="f9osy1x0y"/><path class="iw2i09btv"/></g>`,
		"fallback": "cif:sl",
	});
}

export default Component;
