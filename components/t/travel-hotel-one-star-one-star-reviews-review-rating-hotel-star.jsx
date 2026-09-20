import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arp-ntbmm.css';
import '../../css/u/u9-7r5sna.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="arp-ntbmm"/><path class="u9-7r5sna"/></g>`,
		"fallback": "streamline:travel-hotel-one-star-one-star-reviews-review-rating-hotel-star",
	});
}

export default Component;
