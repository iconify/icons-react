import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vk4v4b4uw.css';
import '../../css/q/qjum4lbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vk4v4b4uw"/><path class="qjum4lbgt"/></g>`,
		"fallback": "keyline-icons:keyboard",
	});
}

export default Component;
