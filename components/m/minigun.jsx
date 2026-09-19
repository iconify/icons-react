import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7uiqbfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7uiqbfl"/>`,
		"fallback": "game-icons:minigun",
	});
}

export default Component;
