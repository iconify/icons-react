import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjqbt8v6y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjqbt8v6y"/>`,
		"fallback": "streamline:interface-favorite-like-1-reward-social-up-rating-media-like-thumb-hand",
	});
}

export default Component;
