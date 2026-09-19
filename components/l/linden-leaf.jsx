import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx3qko77u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx3qko77u"/>`,
		"fallback": "game-icons:linden-leaf",
	});
}

export default Component;
