import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h166qubho.css';
import '../../css/n/nzp8gfnpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h166qubho"/><path class="nzp8gfnpi"/></g>`,
		"fallback": "proicons:pin-off",
	});
}

export default Component;
