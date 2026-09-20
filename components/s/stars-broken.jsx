import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i4_9tjbyj.css';
import '../../css/m/mow4xc1lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i4_9tjbyj"/><path class="mow4xc1lj"/></g>`,
		"fallback": "solar:stars-broken",
	});
}

export default Component;
