import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdfttbm9b.css';
import '../../css/y/yw-sn55so.css';
import '../../css/a/ak99vsb_d.css';
import '../../css/n/n48w_vb_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGeRgyNbBP" x1="253.986" x2="253.986" y1="279" y2="791.028" gradientTransform="translate(2 -279)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fdfttbm9b"/><stop offset="1" class="yw-sn55so"/></linearGradient><path fill="url(#SVGeRgyNbBP)" class="ak99vsb_d"/><path class="n48w_vb_i"/>`,
		"fallback": "selfhst:mastodon",
	});
}

export default Component;
