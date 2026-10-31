import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opl6_qb9p.css';
import '../../css/u/und_hqb0h.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opl6_qb9p"/><path class="und_hqb0h"/></g>`,
		"fallback": "cif:ng",
	});
}

export default Component;
