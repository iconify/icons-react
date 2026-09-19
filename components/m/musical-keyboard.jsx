import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1t0icc-v.css';
import '../../css/t/tfldu8b4b.css';
import '../../css/s/soqz66vtq.css';
import '../../css/k/k07x3y6kz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u1t0icc-v"/><path class="tfldu8b4b"/><path class="soqz66vtq"/><path class="k07x3y6kz"/></g>`,
		"fallback": "fluent-emoji-flat:musical-keyboard",
	});
}

export default Component;
