import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3o-hk-9l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3o-hk-9l"/>`,
		"fallback": "streamline:travel-wayfinder-stairs-2-stairs-staircase-left",
	});
}

export default Component;
