import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-cykxbus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-cykxbus"/>`,
		"fallback": "streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love",
	});
}

export default Component;
