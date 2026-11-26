import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3cbxx1ai.css';
import '../../css/i/i_s0ssbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f3cbxx1ai"/><path class="i_s0ssbnr"/></g>`,
		"fallback": "lucide:screwdriver",
	});
}

export default Component;
