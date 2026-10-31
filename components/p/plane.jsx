import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tjr92xbfv.css';
import '../../css/y/yd1resboj.css';
import '../../css/e/e66ihdb7b.css';
import '../../css/s/s81899b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tjr92xbfv wm-shadow"/><path class="wm-shadow yd1resboj"/><path class="e66ihdb7b"/><path class="s81899b3c"/></g>`,
		"fallback": "withicons-brutal:plane",
	});
}

export default Component;
