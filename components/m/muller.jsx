import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt5qu0bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt5qu0bux"/>`,
		"fallback": "simple-icons:muller",
	});
}

export default Component;
