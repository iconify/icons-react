import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p73b5vb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p73b5vb6g"/>`,
		"fallback": "lineicons:tumblr",
	});
}

export default Component;
