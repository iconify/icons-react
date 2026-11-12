import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fffy1xlok.css';
import '../../css/h/h13cb1w3n.css';
import '../../css/i/iycln-b8i.css';
import '../../css/h/hbt4h80zk.css';
import '../../css/j/ju5f3lb5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGKJlEQK7q" x1="365.7" x2="146.3" y1="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="fffy1xlok"/><stop offset="1" class="h13cb1w3n"/></linearGradient><circle fill="url(#SVGKJlEQK7q)" class="iycln-b8i"/><path class="hbt4h80zk"/><path class="ju5f3lb5l"/>`,
		"fallback": "selfhst:remmina",
	});
}

export default Component;
