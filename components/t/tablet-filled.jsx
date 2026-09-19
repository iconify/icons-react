import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji3oo10aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji3oo10aj"/>`,
		"fallback": "griddy-icons:tablet-filled",
	});
}

export default Component;
