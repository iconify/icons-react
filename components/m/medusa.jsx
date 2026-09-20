import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g56ey5bfi.css';
import '../../css/q/qu9lg2b_c.css';
import '../../css/u/ux_ddxtiq.css';

const viewBox = {"width":256,"height":277};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGzusNleCd" x1="-66.697%" x2="108.63%" y1="81.87%" y2="34.419%"><stop offset="26.563%" class="g56ey5bfi"/><stop offset="100%" class="qu9lg2b_c"/></linearGradient></defs><path fill="url(#SVGzusNleCd)" class="ux_ddxtiq"/>`,
		"fallback": "thesvg-color:medusa",
	});
}

export default Component;
