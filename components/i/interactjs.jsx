import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm9o7ixyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm9o7ixyf"/>`,
		"fallback": "thesvg-color:interactjs",
	});
}

export default Component;
