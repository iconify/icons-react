import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6lafhbvk.css';
import '../../css/w/w6ca74b2j.css';
import '../../css/s/smls78shz.css';
import '../../css/n/nau4w8dar.css';
import '../../css/n/n787bfb7v.css';
import '../../css/p/py99o21wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6lafhbvk"/><path class="w6ca74b2j"/><path class="smls78shz"/><path class="nau4w8dar"/><path class="n787bfb7v"/><path class="py99o21wd"/></g>`,
		"fallback": "solar:radio-broken",
	});
}

export default Component;
