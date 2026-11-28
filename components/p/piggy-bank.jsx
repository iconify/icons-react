import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f739xbb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f739xbb4z"/>`,
		"fallback": "noviair:piggy-bank",
	});
}

export default Component;
