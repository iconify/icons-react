import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ab7kwo5gn.css';
import '../../css/i/i-vmawbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ab7kwo5gn"/><path class="i-vmawbvn"/></g>`,
		"fallback": "solar:tablet-broken",
	});
}

export default Component;
