import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3q-de28s.css';
import '../../css/n/ndpsvvlmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3q-de28s"/><path class="ndpsvvlmm"/></g>`,
		"fallback": "coolicons:microphone-duotone-round",
	});
}

export default Component;
