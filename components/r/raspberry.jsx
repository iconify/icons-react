import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf4akjb8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf4akjb8v"/>`,
		"fallback": "game-icons:raspberry",
	});
}

export default Component;
