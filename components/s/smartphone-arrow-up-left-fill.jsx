import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qnglb7bbo.css';
import '../../css/k/keaw_ubaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="qnglb7bbo"/><path class="keaw_ubaq"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-up-left-fill",
	});
}

export default Component;
