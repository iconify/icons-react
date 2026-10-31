import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozg3edc5g.css';
import '../../css/o/o_3qdsr7f.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozg3edc5g"/><path class="o_3qdsr7f"/></g>`,
		"fallback": "cif:pe",
	});
}

export default Component;
