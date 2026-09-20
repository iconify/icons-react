import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5cbf9bul.css';
import '../../css/y/y6fki-bri.css';
import '../../css/f/f3lmxkbrs.css';
import '../../css/q/q9z5dbb7d.css';
import '../../css/b/btn2cqbcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGUdgXmbcx" x1="256" x2="256" y1="2" y2="514" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="q5cbf9bul"/><stop offset=".237" class="y6fki-bri"/><stop offset="1" class="f3lmxkbrs"/></linearGradient><path fill="url(#SVGUdgXmbcx)" class="q9z5dbb7d"/><path class="btn2cqbcu"/>`,
		"fallback": "selfhst:mediux",
	});
}

export default Component;
