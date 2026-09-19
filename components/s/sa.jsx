import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7nq8oi5h.css';
import '../../css/e/e4o1ae02c.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7nq8oi5h"/><path class="e4o1ae02c"/></g>`,
		"fallback": "cif:sa",
	});
}

export default Component;
