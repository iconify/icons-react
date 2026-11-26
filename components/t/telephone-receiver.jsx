import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycljtxf-w.css';
import '../../css/m/m0wqmubfj.css';
import '../../css/x/xv4bgqv7h.css';
import '../../css/n/nyvbwet2e.css';
import '../../css/g/gdmph8wls.css';
import '../../css/n/nqb5igbke.css';
import '../../css/j/j8p752gjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG2ZwpUdZg" cx="78.3" cy="69.8" r="132.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="ycljtxf-w"/><stop offset=".85" class="m0wqmubfj"/><stop offset="1" class="m0wqmubfj"/></radialGradient></defs><path class="xv4bgqv7h"/><path fill="url(#SVG2ZwpUdZg)" transform="matrix(2.7 0 0 2.7 -27.3 -18.18)" class="nyvbwet2e"/><path class="gdmph8wls"/><path class="nqb5igbke"/><path class="j8p752gjp"/>`,
		"fallback": "xero-emoji:telephone-receiver",
	});
}

export default Component;
