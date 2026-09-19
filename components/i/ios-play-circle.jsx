import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je97gj2zc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je97gj2zc"/>`,
		"fallback": "ion:ios-play-circle",
	});
}

export default Component;
