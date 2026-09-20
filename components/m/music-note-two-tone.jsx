import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w5r710b3p.css';
import '../../css/i/ishhdbb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w5r710b3p"/><path class="ishhdbb1n"/></g>`,
		"fallback": "keyline-icons:music-note-two-tone",
	});
}

export default Component;
