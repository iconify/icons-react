import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o71ldkb2z.css';
import '../../css/b/bmlblcl0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.07 11.98)" class="o71ldkb2z"/><path class="bmlblcl0s"/></g>`,
		"fallback": "andrsrxn:story-off",
	});
}

export default Component;
