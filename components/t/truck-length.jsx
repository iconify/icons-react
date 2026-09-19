import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dncd5rb1n.css';
import '../../css/i/iue80nb2y.css';
import '../../css/f/fky6n3bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dncd5rb1n"/><path class="iue80nb2y"/><path class="fky6n3bak"/></g>`,
		"fallback": "iconoir:truck-length",
	});
}

export default Component;
