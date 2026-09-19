import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9enz8bve.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9enz8bve"/>`,
		"fallback": "fa-solid:volume-slash",
	});
}

export default Component;
