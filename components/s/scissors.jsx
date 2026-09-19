import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs2z8bzes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs2z8bzes"/>`,
		"fallback": "game-icons:scissors",
	});
}

export default Component;
