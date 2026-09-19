import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ic8vbiz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0ic8vbiz"/>`,
		"fallback": "whh:usfootball",
	});
}

export default Component;
