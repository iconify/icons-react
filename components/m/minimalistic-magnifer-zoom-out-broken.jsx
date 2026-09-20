import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cq5xp9n1p.css';
import '../../css/m/mj_6ev9oe.css';
import '../../css/x/x09loybdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cq5xp9n1p"/><path class="mj_6ev9oe"/><path class="x09loybdy"/></g>`,
		"fallback": "solar:minimalistic-magnifer-zoom-out-broken",
	});
}

export default Component;
