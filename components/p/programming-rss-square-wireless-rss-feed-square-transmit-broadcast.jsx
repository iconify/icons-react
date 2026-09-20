import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/a/a-ytts1cs.css';
import '../../css/r/rkpip7bsg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><circle class="a-ytts1cs"/><path class="rkpip7bsg"/></g>`,
		"fallback": "streamline:programming-rss-square-wireless-rss-feed-square-transmit-broadcast",
	});
}

export default Component;
