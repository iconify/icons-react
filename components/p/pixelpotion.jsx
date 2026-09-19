import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4-s41boy.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4-s41boy"/>`,
		"fallback": "whh:pixelpotion",
	});
}

export default Component;
