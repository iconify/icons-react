import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xphw2z6aa.css';
import '../../css/l/lstp_mb9e.css';
import '../../css/r/rlqmokb5v.css';
import '../../css/u/u51pxsb8s.css';
import '../../css/r/rbzuoab3k.css';
import '../../css/n/nkuvr0yck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xphw2z6aa"/><path class="lstp_mb9e"/><path class="rlqmokb5v"/><path class="u51pxsb8s"/><path class="rbzuoab3k"/><path class="nkuvr0yck"/></g>`,
		"fallback": "solar:tuning-broken",
	});
}

export default Component;
