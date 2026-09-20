import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/be57zfbjy.css';
import '../../css/k/k5n-k9boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="be57zfbjy"/><path class="k5n-k9boa"/></g>`,
		"fallback": "solar:pen-new-square-broken",
	});
}

export default Component;
