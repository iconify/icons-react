import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5l-z0bso.css';
import '../../css/u/udd3bbc2x.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGi60vdbXt" class="y5l-z0bso"/></defs><use href="#SVGi60vdbXt" class="udd3bbc2x"/><use href="#SVGi60vdbXt" class="jn8qy4bru"/>`,
		"fallback": "openmoji:liver",
	});
}

export default Component;
