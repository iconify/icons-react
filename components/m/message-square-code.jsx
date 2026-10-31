import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/i/ifnoz4bin.css';
import '../../css/w/wt5kq9b6c.css';
import '../../css/m/m8tip90-n.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/l/l21kic2ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGvYfKoecE" cx="7.64" cy="6.85" r="24.89" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="ifnoz4bin wm-shadow"/><path fill="url(#SVGvYfKoecE)" class="wm-k wt5kq9b6c"/><path class="m8tip90-n wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="l21kic2ie wm-deco"/></g>`,
		"fallback": "withicons-rangoli:message-square-code",
	});
}

export default Component;
