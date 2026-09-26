import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/elj2386lt.css';
import '../../css/a/ajxy9c62r.css';
import '../../css/i/ist54rbfb.css';
import '../../css/p/p1oh4ubnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="elj2386lt"/><path class="ajxy9c62r"/><path class="ist54rbfb"/><path class="p1oh4ubnu"/></g>`,
		"fallback": "solar:move-horizontal-broken",
	});
}

export default Component;
