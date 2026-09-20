import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-xtn_b4w.css';
import '../../css/f/fjkgrkb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-xtn_b4w"/><path class="fjkgrkb_t"/></g>`,
		"fallback": "solar:tag-horizontal-broken",
	});
}

export default Component;
