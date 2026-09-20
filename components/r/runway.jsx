import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pzhbybbyg.css';
import '../../css/w/wp_2lsbjz.css';
import '../../css/m/mhy3-ifmz.css';
import '../../css/p/pin2338sh.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGDTtXObki)"><path class="pzhbybbyg"/><path class="wp_2lsbjz"/><path class="mhy3-ifmz"/></g><defs><clipPath id="SVGDTtXObki"><path class="pin2338sh"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:runway",
	});
}

export default Component;
