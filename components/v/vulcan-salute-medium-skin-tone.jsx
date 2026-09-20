import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na30l5bxc.css';
import '../../css/d/doh3lvt3e.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGNbTQ0cpy" class="na30l5bxc"/></defs><path class="doh3lvt3e"/><g class="jn8qy4bru"><use href="#SVGNbTQ0cpy"/><use href="#SVGNbTQ0cpy"/></g>`,
		"fallback": "openmoji:vulcan-salute-medium-skin-tone",
	});
}

export default Component;
