import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qd7algebq.css';
import '../../css/p/pnj786bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qd7algebq"/><path class="pnj786bba"/></g>`,
		"fallback": "keyline-icons:truck-arrow-down-fill",
	});
}

export default Component;
