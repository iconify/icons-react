import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i6sjuzl3m.css';
import '../../css/t/t2cylssnp.css';
import '../../css/i/i1h42obmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i6sjuzl3m"/><path class="t2cylssnp"/><path class="i1h42obmq"/></g>`,
		"fallback": "solar:panorama-broken",
	});
}

export default Component;
