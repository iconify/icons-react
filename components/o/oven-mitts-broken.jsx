import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hs6rbmbln.css';
import '../../css/w/w722mfbgk.css';
import '../../css/m/mayyj1h2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hs6rbmbln"/><path class="w722mfbgk"/><path class="mayyj1h2w"/></g>`,
		"fallback": "solar:oven-mitts-broken",
	});
}

export default Component;
