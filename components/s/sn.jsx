import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dajoi4szi.css';
import '../../css/i/i8ffy_b0e.css';
import '../../css/h/hw9e_bbpw.css';
import '../../css/e/edln79b4d.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dajoi4szi"/><path class="i8ffy_b0e"/><path class="hw9e_bbpw"/><path class="edln79b4d"/></g>`,
		"fallback": "cif:sn",
	});
}

export default Component;
