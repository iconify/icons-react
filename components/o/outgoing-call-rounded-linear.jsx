import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knp318bux.css';
import '../../css/e/e3c0r7lwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="knp318bux"/><path class="e3c0r7lwb"/></g>`,
		"fallback": "solar:outgoing-call-rounded-linear",
	});
}

export default Component;
