import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na30l5bxc.css';
import '../../css/l/l3-aitx1e.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGNbTQ0cpy" class="na30l5bxc"/></defs><path class="l3-aitx1e"/><g class="jn8qy4bru"><use href="#SVGNbTQ0cpy"/><use href="#SVGNbTQ0cpy"/></g>`,
		"fallback": "openmoji:vulcan-salute-medium-dark-skin-tone",
	});
}

export default Component;
