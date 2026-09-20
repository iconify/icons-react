import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bk50ckbpt.css';
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
		"content": `<g class="ipq1z-bjh"><path class="bk50ckbpt"/><path class="s9qxbdczi"/><path class="urvibib1y"/></g>`,
		"fallback": "solar:ruler-angular-linear",
	});
}

export default Component;
