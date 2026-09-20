import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1y9aqblm.css';
import '../../css/i/i0bv9be2e.css';
import '../../css/p/pop59pb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e1y9aqblm"/><path class="i0bv9be2e"/><path class="pop59pb2d"/></g>`,
		"fallback": "solar:repeat-one-minimalistic-broken",
	});
}

export default Component;
