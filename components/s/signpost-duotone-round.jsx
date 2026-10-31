import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fc17-jbir.css';
import '../../css/k/kkhz1abus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fc17-jbir"/><path class="kkhz1abus"/></g>`,
		"fallback": "coolicons:signpost-duotone-round",
	});
}

export default Component;
