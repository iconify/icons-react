import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_jskjbtc.css';
import '../../css/p/p1o8i6baa.css';

const viewBox = {"width":360,"height":360};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGx5gPieiZ)"><path class="i_jskjbtc"/></g><defs><clipPath id="SVGx5gPieiZ"><path class="p1o8i6baa"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:userpilot-light",
	});
}

export default Component;
