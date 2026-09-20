import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg6lk8tud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg6lk8tud"/>`,
		"fallback": "simple-icons:mihon",
	});
}

export default Component;
