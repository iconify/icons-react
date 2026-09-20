import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ye7qo4bza.css';
import '../../css/s/sp0979bhv.css';
import '../../css/s/sieuiccfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ye7qo4bza"/><path class="sp0979bhv"/><path class="sieuiccfi"/></g>`,
		"fallback": "solar:posts-carousel-vertical-line-duotone",
	});
}

export default Component;
