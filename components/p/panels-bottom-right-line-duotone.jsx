import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cetqrvbdm.css';
import '../../css/i/i22s-4u1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cetqrvbdm"/><path class="i22s-4u1h"/></g>`,
		"fallback": "solar:panels-bottom-right-line-duotone",
	});
}

export default Component;
