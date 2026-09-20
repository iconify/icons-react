import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iar3qwbrm.css';
import '../../css/e/epme-tb1k.css';
import '../../css/a/af-qgnuco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iar3qwbrm"/><path class="epme-tb1k"/><path class="af-qgnuco"/></g>`,
		"fallback": "solar:tag-broken",
	});
}

export default Component;
