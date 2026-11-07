import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrauyebmu.css';
import '../../css/z/zm9loubcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hrauyebmu"/><path class="zm9loubcr"/></g>`,
		"fallback": "solar:square-share-line-broken",
	});
}

export default Component;
