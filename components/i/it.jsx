import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/przbox5lp.css';
import '../../css/h/hevie_brf.css';
import '../../css/g/gq2r8vb4m.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="przbox5lp"/><path class="hevie_brf"/><path class="gq2r8vb4m"/></g>`,
		"fallback": "cif:it",
	});
}

export default Component;
