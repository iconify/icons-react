import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vbbz86bxc.css';
import '../../css/i/i2-1-fp0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vbbz86bxc"/><path class="i2-1-fp0k"/></g>`,
		"fallback": "coolicons:slider-vertical-1-duocolor-round",
	});
}

export default Component;
