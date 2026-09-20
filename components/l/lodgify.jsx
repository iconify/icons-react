import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qy80u1bjw.css';
import '../../css/f/fz451zb9n.css';
import '../../css/x/xcetmgeuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGfM2vdeLS)"><path class="qy80u1bjw"/><path class="fz451zb9n"/></g><defs><clipPath id="SVGfM2vdeLS"><path class="xcetmgeuw"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:lodgify",
	});
}

export default Component;
