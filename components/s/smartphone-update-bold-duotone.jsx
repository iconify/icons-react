import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q9eg9wyrd.css';
import '../../css/z/z419kbp5d.css';
import '../../css/n/nsy8q-7oc.css';
import '../../css/k/khuzgeblh.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="cuyn6tgcc"><path class="q9eg9wyrd"/><path class="z419kbp5d"/><path class="nsy8q-7oc"/><path class="khuzgeblh"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`,
		"fallback": "solar:smartphone-update-bold-duotone",
	});
}

export default Component;
