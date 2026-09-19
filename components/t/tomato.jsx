import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wza7knbli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wza7knbli"/>`,
		"fallback": "game-icons:tomato",
	});
}

export default Component;
