import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qaaztzdak.css';

const viewBox = {"width":240,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><filter id="SVG70vUqbqX"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g filter="url(#SVG70vUqbqX)" transform="translate(-134 -25)" class="bi12bsetm"><path class="qaaztzdak"/></g>`,
		"fallback": "thesvg-color:voicemod-dark",
	});
}

export default Component;
