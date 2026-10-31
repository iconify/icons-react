import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ej_fohbod.css';
import '../../css/e/e-xhastkw.css';
import '../../css/m/mmla_w54c.css';
import '../../css/e/e5yayacfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ej_fohbod wm-shadow"/><path class="e-xhastkw wm-shadow"/><path class="mmla_w54c"/><path class="e5yayacfw"/></g>`,
		"fallback": "withicons-brutal:tag",
	});
}

export default Component;
