import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id5-7hbdu.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id5-7hbdu"/>`,
		"fallback": "whh:s-upper-case",
	});
}

export default Component;
