import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqt4pq8_w.css';
import '../../css/r/rcyub1bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aqt4pq8_w"/><path class="rcyub1bkc"/></g>`,
		"fallback": "solar:smart-speaker-minimalistic-broken",
	});
}

export default Component;
