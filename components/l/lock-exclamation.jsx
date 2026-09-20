import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0-kz1bwg.css';
import '../../css/f/f9bl9ibhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h0-kz1bwg"/><path class="f9bl9ibhh"/></g>`,
		"fallback": "tabler:lock-exclamation",
	});
}

export default Component;
