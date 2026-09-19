import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2veihb8k.css';
import '../../css/o/oddkodjqw.css';
import '../../css/s/s43ffc4qp.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2veihb8k"/><path class="oddkodjqw"/><path class="s43ffc4qp"/></g>`,
		"fallback": "cif:ro",
	});
}

export default Component;
