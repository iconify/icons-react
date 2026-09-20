import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s4ygatbpy.css';
import '../../css/q/qdnd6ab_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s4ygatbpy"/><path class="qdnd6ab_e"/></g>`,
		"fallback": "keyline-icons:send-clock-duotone",
	});
}

export default Component;
