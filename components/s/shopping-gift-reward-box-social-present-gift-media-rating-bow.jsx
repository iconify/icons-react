import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/muu5q7b7m.css';
import '../../css/x/xh426ndmp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="muu5q7b7m"/><path class="xh426ndmp"/></g>`,
		"fallback": "streamline:shopping-gift-reward-box-social-present-gift-media-rating-bow",
	});
}

export default Component;
