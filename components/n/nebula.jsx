import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu6kj3bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu6kj3bqx"/>`,
		"fallback": "thesvg-color:nebula",
	});
}

export default Component;
