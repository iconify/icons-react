import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mj_6ev9oe.css';
import '../../css/x/x09loybdy.css';
import '../../css/z/zohnu00qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mj_6ev9oe"/><path class="x09loybdy"/><path class="zohnu00qb"/></g>`,
		"fallback": "solar:minimalistic-magnifier-close-broken",
	});
}

export default Component;
