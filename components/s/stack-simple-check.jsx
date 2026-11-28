import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrme9n-sr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrme9n-sr"/>`,
		"fallback": "pullo:stack-simple-check",
	});
}

export default Component;
