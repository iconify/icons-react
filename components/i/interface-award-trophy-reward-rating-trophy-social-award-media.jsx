import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i6thqwbwq.css';
import '../../css/m/m-k68pbtz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i6thqwbwq"/><path class="m-k68pbtz"/></g>`,
		"fallback": "streamline:interface-award-trophy-reward-rating-trophy-social-award-media",
	});
}

export default Component;
