import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arp-ntbmm.css';
import '../../css/k/kx4ifib2u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="arp-ntbmm"/><path class="kx4ifib2u"/></g>`,
		"fallback": "streamline:travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star",
	});
}

export default Component;
