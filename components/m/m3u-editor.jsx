import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujivq7b7t.css';
import '../../css/f/fixdu2n4y.css';
import '../../css/w/wz00z2k7d.css';
import '../../css/r/rl88n_b7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGxKrMHdEF" x1="37.127" x2="437.695" y1="139.288" y2="358.125" gradientTransform="matrix(1 0 0 -1 0 514.81)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ujivq7b7t"/><stop offset=".37" class="fixdu2n4y"/><stop offset=".81" class="wz00z2k7d"/></linearGradient><path fill="url(#SVGxKrMHdEF)" class="rl88n_b7j"/>`,
		"fallback": "selfhst:m3u-editor",
	});
}

export default Component;
