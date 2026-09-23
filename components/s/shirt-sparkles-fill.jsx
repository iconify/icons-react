import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu-1hxbdt.css';
import '../../css/c/cyw3_if5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qu-1hxbdt"/><path class="cyw3_if5m"/></g>`,
		"fallback": "keyline-icons:shirt-sparkles-fill",
	});
}

export default Component;
