import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j_uaw8aos.css';
import '../../css/h/h7hbobcdx.css';
import '../../css/u/ubfykzbta.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j_uaw8aos"/><path class="h7hbobcdx"/><path class="ubfykzbta"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:record-circle-broken",
	});
}

export default Component;
