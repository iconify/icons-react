import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0j38ztpz.css';
import '../../css/e/ezz2lob8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0j38ztpz"/><path class="ezz2lob8j"/></g>`,
		"fallback": "solar:volume-small-linear",
	});
}

export default Component;
