import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r31eezbqv.css';
import '../../css/z/z5gr-2f0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r31eezbqv"/><path class="z5gr-2f0h"/></g>`,
		"fallback": "solar:notification-remove-linear",
	});
}

export default Component;
