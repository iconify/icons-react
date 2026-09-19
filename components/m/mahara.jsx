import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_c9fob0z.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_c9fob0z"/>`,
		"fallback": "whh:mahara",
	});
}

export default Component;
