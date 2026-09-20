import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nkw5_c53b.css';
import '../../css/z/zp6h8d_gb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="nkw5_c53b"/><path class="zp6h8d_gb"/></g>`,
		"fallback": "streamline:programming-rss-symbol-wireless-feed-rss-transmit-broadcast",
	});
}

export default Component;
