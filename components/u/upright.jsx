import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-s7t9sf.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-s7t9sf"/>`,
		"fallback": "whh:upright",
	});
}

export default Component;
