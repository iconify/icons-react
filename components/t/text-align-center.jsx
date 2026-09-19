import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1d8ngb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1d8ngb4k"/>`,
		"fallback": "ci:text-align-center",
	});
}

export default Component;
