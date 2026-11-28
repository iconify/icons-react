import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heiy4rbnb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heiy4rbnb"/>`,
		"fallback": "pullo:user-slash-light",
	});
}

export default Component;
