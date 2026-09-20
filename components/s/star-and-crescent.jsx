import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nasn4zbie.css';
import '../../css/u/uq44tf-no.css';
import '../../css/r/rdcxjybbt.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGyPFLEbar" class="nasn4zbie"/><path id="SVGFuge6cpE" class="uq44tf-no"/></defs><g class="rdcxjybbt"><use href="#SVGyPFLEbar"/><use href="#SVGFuge6cpE"/></g><g class="ij2x_72vy"><use href="#SVGyPFLEbar"/><use href="#SVGFuge6cpE"/></g>`,
		"fallback": "openmoji:star-and-crescent",
	});
}

export default Component;
