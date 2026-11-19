import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbqxqhbuz.css';
import '../../css/k/k3vmc948u.css';
import '../../css/m/mub0vqb3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGoBxerdDg" x2="1" gradientTransform="matrix(398.66986 0 0 -511.99995 56.67 512)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pbqxqhbuz"/><stop offset="1" class="k3vmc948u"/></linearGradient><path fill="url(#SVGoBxerdDg)" class="mub0vqb3k"/>`,
		"fallback": "selfhst:uxwizz",
	});
}

export default Component;
