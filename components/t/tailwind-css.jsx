import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5xlurb-j.css';
import '../../css/t/thpex1q1k.css';

const viewBox = {"width":54,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGMg7Ixb1i)"><path clip-rule="evenodd" class="g5xlurb-j"/></g><defs><clipPath id="SVGMg7Ixb1i"><path class="thpex1q1k"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:tailwind-css",
	});
}

export default Component;
