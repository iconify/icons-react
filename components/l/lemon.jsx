import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x187ccbsy.css';
import '../../css/d/dhpw3gbbv.css';
import '../../css/d/d0fmz0sri.css';
import '../../css/x/x7exasbge.css';
import '../../css/p/pd7cl8bml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x187ccbsy"/><path class="dhpw3gbbv"/><path class="d0fmz0sri"/><path class="x7exasbge"/><path class="pd7cl8bml"/>`,
		"fallback": "fxemoji:lemon",
	});
}

export default Component;
