import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6qntjvwm.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/wigdudbli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGf0PPXbFA" x1="256" x2="256" y1="0" y2="364.116" gradientUnits="userSpaceOnUse"><stop offset="0" class="a6qntjvwm"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGf0PPXbFA)" class="wigdudbli"/>`,
		"fallback": "selfhst:string-is-light",
	});
}

export default Component;
