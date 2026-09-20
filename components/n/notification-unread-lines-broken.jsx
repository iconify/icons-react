import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u00ey8bps.css';
import '../../css/y/ynz9_ybsk.css';
import '../../css/j/jpdqneb7h.css';
import '../../css/b/be57zfbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="u00ey8bps"/><path class="ynz9_ybsk"/><path class="jpdqneb7h"/><path class="be57zfbjy"/></g>`,
		"fallback": "solar:notification-unread-lines-broken",
	});
}

export default Component;
