import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9rzs5bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9rzs5bhl"/>`,
		"fallback": "mdi-light:paperclip",
	});
}

export default Component;
