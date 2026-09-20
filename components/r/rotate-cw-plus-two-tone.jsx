import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d8o_3k_xk.css';
import '../../css/z/zasenvc8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d8o_3k_xk"/><path class="zasenvc8n"/></g>`,
		"fallback": "keyline-icons:rotate-cw-plus-two-tone",
	});
}

export default Component;
