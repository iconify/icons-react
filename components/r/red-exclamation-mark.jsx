import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-6u2abyf.css';
import '../../css/h/hrzob008l.css';
import '../../css/b/bbjcuubsr.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGWNr3z2qS" class="k-6u2abyf"/></defs><g class="hrzob008l"><circle class="bbjcuubsr"/><use href="#SVGWNr3z2qS"/></g><g class="ij2x_72vy"><circle class="bbjcuubsr"/><use href="#SVGWNr3z2qS"/></g>`,
		"fallback": "openmoji:red-exclamation-mark",
	});
}

export default Component;
