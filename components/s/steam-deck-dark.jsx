import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o27rfj2-j.css';
import '../../css/v/v1w56ebrl.css';
import '../../css/c/ct___5r2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o27rfj2-j"/><linearGradient id="SVGbsZCzbeC" x1="-844.008" x2="-838.841" y1="5.074" y2="5.074" gradientTransform="rotate(50.29 -38121.604 79919.215)scale(89.07 -89.07)" gradientUnits="userSpaceOnUse"><stop offset="0" class="v1w56ebrl"/><stop offset="1"/></linearGradient><path fill="url(#SVGbsZCzbeC)" class="ct___5r2c"/>`,
		"fallback": "selfhst:steam-deck-dark",
	});
}

export default Component;
