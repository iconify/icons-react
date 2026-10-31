import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbit45gps.css';
import '../../css/b/bzb5x4zov.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbit45gps"/><path class="bzb5x4zov"/></g>`,
		"fallback": "cif:vn",
	});
}

export default Component;
