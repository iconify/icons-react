import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_8sl_z9w.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)"><path clip-rule="evenodd" class="q_8sl_z9w"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`,
		"fallback": "solar:smartphone-update-outline",
	});
}

export default Component;
