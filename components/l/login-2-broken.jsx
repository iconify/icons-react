import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r86r2dwxj.css';
import '../../css/w/w6flfb2rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r86r2dwxj"/><path class="w6flfb2rj"/></g>`,
		"fallback": "solar:login-2-broken",
	});
}

export default Component;
