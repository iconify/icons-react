import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eootuelhi.css';
import '../../css/h/hc8gvgv3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eootuelhi"/><path class="hc8gvgv3n"/></g>`,
		"fallback": "keyline-icons:wallet-sparkles-fill",
	});
}

export default Component;
