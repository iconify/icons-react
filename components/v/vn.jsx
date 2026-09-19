import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s04qjzzwi.css';
import '../../css/f/fk_b2k66b.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s04qjzzwi"/><path class="fk_b2k66b"/></g>`,
		"fallback": "cif:vn",
	});
}

export default Component;
