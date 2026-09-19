import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5bas9i5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5bas9i5v"/>`,
		"fallback": "game-icons:spotted-wound",
	});
}

export default Component;
