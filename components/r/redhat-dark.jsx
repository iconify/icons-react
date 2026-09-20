import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/i/i43k7j86h.css';
import '../../css/f/f0k77zbem.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/r/rablvtboz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVGysbrecLw)"><path class="i43k7j86h"/><path class="f0k77zbem"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVGysbrecLw"><path class="rablvtboz"/></clipPath></defs></g>`,
		"fallback": "skill-icons:redhat-dark",
	});
}

export default Component;
