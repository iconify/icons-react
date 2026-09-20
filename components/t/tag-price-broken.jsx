import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b581idbbf.css';
import '../../css/e/epme-tb1k.css';
import '../../css/i/iar3qwbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b581idbbf"/><path class="epme-tb1k"/><path class="iar3qwbrm"/></g>`,
		"fallback": "solar:tag-price-broken",
	});
}

export default Component;
