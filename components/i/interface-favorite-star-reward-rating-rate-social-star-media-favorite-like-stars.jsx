import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7m83e-jp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7m83e-jp"/>`,
		"fallback": "streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars",
	});
}

export default Component;
