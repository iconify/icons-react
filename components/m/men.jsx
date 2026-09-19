import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8xol83xs.css';

const viewBox = {"width":770,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8xol83xs"/>`,
		"fallback": "whh:men",
	});
}

export default Component;
