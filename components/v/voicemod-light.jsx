import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1bsfj-lz.css';
import '../../css/q/qa71dmbqs.css';

const viewBox = {"width":240,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGz3CcXdje)"><path class="j1bsfj-lz"/></g><defs><clipPath id="SVGz3CcXdje"><path class="qa71dmbqs"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:voicemod-light",
	});
}

export default Component;
