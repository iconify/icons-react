import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spi__0but.css';
import '../../css/k/k_eyoabrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="spi__0but"/><path class="k_eyoabrm"/></g>`,
		"fallback": "solar:scaling-broken",
	});
}

export default Component;
