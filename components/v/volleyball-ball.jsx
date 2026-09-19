import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2wj4l62v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2wj4l62v"/>`,
		"fallback": "game-icons:volleyball-ball",
	});
}

export default Component;
