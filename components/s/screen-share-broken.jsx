import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ivy0y0brz.css';
import '../../css/q/qldi4nb9l.css';
import '../../css/z/zgwn8jw0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ivy0y0brz"/><path class="qldi4nb9l"/><path class="zgwn8jw0r"/></g>`,
		"fallback": "solar:screen-share-broken",
	});
}

export default Component;
