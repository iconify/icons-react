import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1z1kiznu.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1z1kiznu"/>`,
		"fallback": "whh:pebble",
	});
}

export default Component;
