import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/okb-fxb0v.css';
import '../../css/w/wc7h-ac_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="okb-fxb0v"/><path class="wc7h-ac_j"/></g>`,
		"fallback": "keyline-icons:message-sparkle-two-tone",
	});
}

export default Component;
