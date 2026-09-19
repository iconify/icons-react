import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn6614b0h.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn6614b0h"/>`,
		"fallback": "fa-solid:users-slash",
	});
}

export default Component;
