import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a3r6b-b4d.css';
import '../../css/s/s9qxbdczi.css';
import '../../css/u/urvibib1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a3r6b-b4d"/><path class="s9qxbdczi"/><path class="urvibib1y"/></g>`,
		"fallback": "solar:ruler-angular-broken",
	});
}

export default Component;
