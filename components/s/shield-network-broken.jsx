import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r5fahkzon.css';
import '../../css/k/koiq71blg.css';
import '../../css/t/tokx6ighc.css';
import '../../css/k/kvqhqh57h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r5fahkzon"/><path class="koiq71blg"/><path class="tokx6ighc"/><path class="kvqhqh57h"/></g>`,
		"fallback": "solar:shield-network-broken",
	});
}

export default Component;
