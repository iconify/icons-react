import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wjw99lb2m.css';
import '../../css/n/nk62zxbpn.css';
import '../../css/a/amsssrbtq.css';
import '../../css/e/ex_z2zb_b.css';
import '../../css/d/d-orjcc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wjw99lb2m"/><path class="nk62zxbpn"/><path class="amsssrbtq"/><path class="ex_z2zb_b"/><path class="d-orjcc8m"/></g>`,
		"fallback": "solar:share-broken",
	});
}

export default Component;
