import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfz3-5ryd.css';
import '../../css/j/jmvgb3twy.css';
import '../../css/e/e580cqbom.css';
import '../../css/s/s2myolb5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGZkeRkdqz" x1="385.222" x2="405.918" y1="482.514" y2="477.914" gradientTransform="matrix(.75 0 0 .75 -284.775 -343.25)" gradientUnits="userSpaceOnUse"><stop offset="0" class="nfz3-5ryd"/><stop offset="1" class="jmvgb3twy"/></linearGradient></defs><path class="e580cqbom"/><path fill="url(#SVGZkeRkdqz)" class="s2myolb5r"/>`,
		"fallback": "material-icon-theme:keystatic",
	});
}

export default Component;
