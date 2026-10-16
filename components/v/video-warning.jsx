import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i99jr6b1b.css';
import '../../css/d/dx3r8qbcz.css';
import '../../css/v/vujverciy.css';
import '../../css/y/y9szotbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i99jr6b1b"/><rect class="dx3r8qbcz"/><path class="vujverciy"/><path class="y9szotbmb"/></g>`,
		"fallback": "andrsrxn:video-warning",
	});
}

export default Component;
