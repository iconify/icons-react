import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoj03-bkh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoj03-bkh"/>`,
		"fallback": "streamline:interface-award-half-star-reward-rating-rate-social-star-media-favorite-like-stars-half",
	});
}

export default Component;
