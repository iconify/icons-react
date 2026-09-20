import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dnt31gbid.css';
import '../../css/w/wit3a9bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dnt31gbid"/><path class="wit3a9bcc"/></g>`,
		"fallback": "solar:minus-broken",
	});
}

export default Component;
