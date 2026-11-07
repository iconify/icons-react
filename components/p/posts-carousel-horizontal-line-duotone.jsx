import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5l1hedvi.css';
import '../../css/m/m-nft4g9k.css';
import '../../css/c/cx-7pstvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l5l1hedvi"/><path class="m-nft4g9k"/><path class="cx-7pstvh"/></g>`,
		"fallback": "solar:posts-carousel-horizontal-line-duotone",
	});
}

export default Component;
