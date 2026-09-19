import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7-5tc2vx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7-5tc2vx"/>`,
		"fallback": "whh:underline",
	});
}

export default Component;
