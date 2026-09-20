import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnkz51brj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnkz51brj"/>`,
		"fallback": "streamline:interface-favorite-dislike-1-reward-down-thumb-hand-social-media-dislike-rating",
	});
}

export default Component;
