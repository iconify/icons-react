import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kp848b4hn.css';
import '../../css/w/w97cv4bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kp848b4hn"/><path class="w97cv4bsu"/></g>`,
		"fallback": "iconamoon:sign-y",
	});
}

export default Component;
