import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u-d0by1uv.css';
import '../../css/x/xv6kuw8hw.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/x/xme672xeh.css';
import '../../css/v/vnda1s8vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u-d0by1uv"/><path class="xv6kuw8hw"/><path class="ko6o-6b9b"/><path class="xme672xeh"/><path class="vnda1s8vz"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-broken",
	});
}

export default Component;
