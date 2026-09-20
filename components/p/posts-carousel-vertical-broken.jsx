import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rct29b3qg.css';
import '../../css/e/ezkmwabnq.css';
import '../../css/j/janxgzbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rct29b3qg"/><path class="ezkmwabnq"/><path class="janxgzbgp"/></g>`,
		"fallback": "solar:posts-carousel-vertical-broken",
	});
}

export default Component;
