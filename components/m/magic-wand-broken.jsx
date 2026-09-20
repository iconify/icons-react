import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fqm8jw--q.css';
import '../../css/u/uuzehgbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fqm8jw--q"/><path class="uuzehgbop"/></g>`,
		"fallback": "solar:magic-wand-broken",
	});
}

export default Component;
