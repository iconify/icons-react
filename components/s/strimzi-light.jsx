import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/afgd4bb1a.css';
import '../../css/c/cpl6psbpk.css';
import '../../css/l/lfg3r-bvu.css';
import '../../css/q/qfqijibiz.css';

const viewBox = {"width":281.94,"height":323.44,"left":39.28,"top":-1.97};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGOVZ1vcdi" x1="-202.908" x2="-202.212" y1="-1.633" y2="-1.633" gradientTransform="rotate(64.94 -61021.575 94340.097)scale(594.10366)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="afgd4bb1a"/></linearGradient><clipPath id="SVGucECoeCf"><path class="cpl6psbpk"/></clipPath></defs><path class="lfg3r-bvu"/><g clip-path="url(#SVGucECoeCf)"><path fill="url(#SVGOVZ1vcdi)" class="qfqijibiz"/></g>`,
		"fallback": "thesvg-color:strimzi-light",
	});
}

export default Component;
