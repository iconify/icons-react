import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwrz3wh0v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwrz3wh0v"/>`,
		"fallback": "ion:scale-sharp",
	});
}

export default Component;
