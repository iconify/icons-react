import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arp-ntbmm.css';
import '../../css/q/qdu1-nbwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="arp-ntbmm"/><path class="qdu1-nbwr"/></g>`,
		"fallback": "streamline:travel-hotel-two-star-two-stars-reviews-review-rating-hotel-star",
	});
}

export default Component;
