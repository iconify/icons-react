import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zbitkiy4i.css';
import '../../css/y/y9p2p-0kn.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zbitkiy4i"/><path class="y9p2p-0kn"/><circle class="u00ey8bps"/></g>`,
		"fallback": "solar:letter-unread-linear",
	});
}

export default Component;
