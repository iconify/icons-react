import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjfd3m8ci.css';
import '../../css/v/vu3cokhaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rjfd3m8ci"/><path class="vu3cokhaw"/></g>`,
		"fallback": "coolicons:keyframes-duocolor-round",
	});
}

export default Component;
