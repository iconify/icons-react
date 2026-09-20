import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ice5ohbof.css';
import '../../css/w/w0sl_bboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ice5ohbof"/><path class="w0sl_bboy"/></g>`,
		"fallback": "keyline-icons:list-video-fill",
	});
}

export default Component;
