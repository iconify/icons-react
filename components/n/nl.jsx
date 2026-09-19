import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y472ujb5k.css';
import '../../css/q/qg8ed74ug.css';
import '../../css/a/amk85uvcq.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y472ujb5k"/><path class="qg8ed74ug"/><path class="amk85uvcq"/></g>`,
		"fallback": "cif:nl",
	});
}

export default Component;
