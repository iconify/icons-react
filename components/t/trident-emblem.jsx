import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq4w-tbtk.css';
import '../../css/l/lea_bji6i.css';
import '../../css/e/e93no6iji.css';
import '../../css/n/njpesabrm.css';
import '../../css/r/rz09ydx7m.css';
import '../../css/s/sdzoy8bjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGVY1lkber" cx="83.8" cy="68" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="wq4w-tbtk"/><stop offset=".85" class="lea_bji6i"/><stop offset="1" class="lea_bji6i"/></radialGradient></defs><path class="e93no6iji"/><path fill="url(#SVGVY1lkber)" transform="matrix(2.7 0 0 2.7 -18.389 -18.389)" class="njpesabrm"/><path class="rz09ydx7m"/><path class="sdzoy8bjq"/>`,
		"fallback": "xero-emoji:trident-emblem",
	});
}

export default Component;
