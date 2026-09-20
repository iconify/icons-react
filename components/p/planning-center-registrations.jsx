import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb9s8pbmn.css';
import '../../css/x/x1ldb7bmu.css';
import '../../css/f/fesr6pspg.css';
import '../../css/l/lngldfetz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGFVZY5dGN" x1="201.5" x2="1225.5" y1="177.505" y2="-846.495" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="cb9s8pbmn"/><stop offset="1" class="x1ldb7bmu"/></linearGradient><path fill="url(#SVGFVZY5dGN)" class="fesr6pspg"/><path class="lngldfetz"/>`,
		"fallback": "selfhst:planning-center-registrations",
	});
}

export default Component;
