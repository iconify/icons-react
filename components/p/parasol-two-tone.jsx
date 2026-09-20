import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e7qr6bb7e.css';
import '../../css/i/iz-x60ucx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e7qr6bb7e"/><path class="iz-x60ucx"/></g>`,
		"fallback": "keyline-icons:parasol-two-tone",
	});
}

export default Component;
