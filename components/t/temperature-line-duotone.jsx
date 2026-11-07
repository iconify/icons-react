import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r14jftois.css';
import '../../css/c/cwj1tqiwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r14jftois"/><path class="cwj1tqiwq"/></g>`,
		"fallback": "solar:temperature-line-duotone",
	});
}

export default Component;
