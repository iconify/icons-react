import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q90dtkzdo.css';
import '../../css/u/uc85k4qnp.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGPrAKQe7C" class="q90dtkzdo"/></defs><circle class="uc85k4qnp"/><use href="#SVGPrAKQe7C"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><use href="#SVGPrAKQe7C"/></g>`,
		"fallback": "openmoji:regional-indicator-s",
	});
}

export default Component;
