import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opl6_qb9p.css';
import '../../css/h/h6qog1b5o.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opl6_qb9p"/><path class="h6qog1b5o"/></g>`,
		"fallback": "cif:ng",
	});
}

export default Component;
