import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfx70jbuz.css';
import '../../css/i/irwiobbzj.css';
import '../../css/h/hhdmy4bak.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bss1f4bwd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVTPunbvN" class="sfx70jbuz"/></defs><path class="irwiobbzj"/><path class="hhdmy4bak"/><g class="ij2x_72vy"><use href="#SVGVTPunbvN"/><use href="#SVGVTPunbvN"/><path class="bss1f4bwd"/></g>`,
		"fallback": "openmoji:tongue",
	});
}

export default Component;
