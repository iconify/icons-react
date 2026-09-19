import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae2brcc5z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae2brcc5z"/>`,
		"fallback": "foundation:torso-female",
	});
}

export default Component;
