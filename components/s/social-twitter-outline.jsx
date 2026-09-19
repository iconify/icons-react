import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6pa94bxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6pa94bxi"/>`,
		"fallback": "ion:social-twitter-outline",
	});
}

export default Component;
