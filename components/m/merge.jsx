import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9_07c7vl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9_07c7vl"/>`,
		"fallback": "whh:merge",
	});
}

export default Component;
