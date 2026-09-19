import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmvxeu1mh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmvxeu1mh"/>`,
		"fallback": "game-icons:kangaroo",
	});
}

export default Component;
