import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_cm0ebcq.css';
import '../../css/u/uqvg4sb8c.css';
import '../../css/t/t9g34dboz.css';
import '../../css/j/j4z6nd5ga.css';
import '../../css/i/iiswwz7ar.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_cm0ebcq"/><path class="uqvg4sb8c"/><path class="t9g34dboz"/><path class="j4z6nd5ga"/><path class="iiswwz7ar"/></g>`,
		"fallback": "fluent-emoji-flat:sushi",
	});
}

export default Component;
