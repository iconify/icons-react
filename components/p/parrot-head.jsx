import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or70bzl6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or70bzl6v"/>`,
		"fallback": "game-icons:parrot-head",
	});
}

export default Component;
