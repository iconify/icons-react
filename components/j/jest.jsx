import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t88-8mi_b.css';
import '../../css/t/tb0zkqb8c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="t88-8mi_b"/><path class="tb0zkqb8c"/></g>`,
		"fallback": "skill-icons:jest",
	});
}

export default Component;
