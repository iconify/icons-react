import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a71ialb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a71ialb9h"/>`,
		"fallback": "game-icons:passport",
	});
}

export default Component;
