import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0u7_ccwm.css';
import '../../css/q/qkg17wbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k0u7_ccwm"/><path class="qkg17wbok"/></g>`,
		"fallback": "coolicons:pin-off-duocolor-round",
	});
}

export default Component;
