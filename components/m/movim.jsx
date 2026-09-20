import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgp9bebmo.css';
import '../../css/e/ey8l3fb4m.css';
import '../../css/i/iycln-b8i.css';
import '../../css/f/fvsqx4b-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG9qplhbZB" x1="76.987" x2="664.906" y1="540.371" y2="-47.547" gradientTransform="matrix(4.2447 0 0 -4.2215 -363.418 2246.135)" gradientUnits="userSpaceOnUse"><stop offset="0" class="dgp9bebmo"/><stop offset="1" class="ey8l3fb4m"/></linearGradient><circle fill="url(#SVG9qplhbZB)" class="iycln-b8i"/><path class="fvsqx4b-g"/>`,
		"fallback": "selfhst:movim",
	});
}

export default Component;
