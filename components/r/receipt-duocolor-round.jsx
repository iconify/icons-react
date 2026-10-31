import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv-hghb8k.css';
import '../../css/f/f8efyrkge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pv-hghb8k"/><path class="f8efyrkge"/></g>`,
		"fallback": "coolicons:receipt-duocolor-round",
	});
}

export default Component;
