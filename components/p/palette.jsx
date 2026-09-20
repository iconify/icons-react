import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hh0s-2j4i.css';
import '../../css/i/ippy8g9bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hh0s-2j4i"/><path class="ippy8g9bw"/></g>`,
		"fallback": "keyline-icons:palette",
	});
}

export default Component;
