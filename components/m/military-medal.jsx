import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3x7dfbgq.css';
import '../../css/a/ae849gbxa.css';
import '../../css/c/cwyvfcb4p.css';
import '../../css/f/f6kfxdbnp.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGfmyJM77M" class="z3x7dfbgq"/></defs><g class="ae849gbxa"><path class="cwyvfcb4p"/><path class="f6kfxdbnp"/></g><g class="ij2x_72vy"><use href="#SVGfmyJM77M"/><use href="#SVGfmyJM77M"/></g>`,
		"fallback": "openmoji:military-medal",
	});
}

export default Component;
