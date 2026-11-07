import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hjuar3b7p.css';
import '../../css/d/dtoolxbmj.css';
import '../../css/a/az_in-1oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hjuar3b7p"/><path class="dtoolxbmj"/><path class="az_in-1oe"/></g>`,
		"fallback": "solar:link-minimalistic-2-broken",
	});
}

export default Component;
