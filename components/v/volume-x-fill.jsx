import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9yf7qbhl.css';
import '../../css/i/iczb-ub_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y9yf7qbhl"/><path class="iczb-ub_h"/></g>`,
		"fallback": "keyline-icons:volume-x-fill",
	});
}

export default Component;
