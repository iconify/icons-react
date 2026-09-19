import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/m/mkvr5_bto.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><circle class="mkvr5_bto"/></g>`,
		"fallback": "cif:jp",
	});
}

export default Component;
