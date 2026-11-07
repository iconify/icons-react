import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/caog0qvka.css';
import '../../css/y/yncpr3b3n.css';
import '../../css/c/cw0dg-bgf.css';
import '../../css/e/erekrcbav.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="caog0qvka"><path class="yncpr3b3n"/><path class="cw0dg-bgf"/><path class="erekrcbav"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`,
		"fallback": "solar:smartphone-update-linear",
	});
}

export default Component;
