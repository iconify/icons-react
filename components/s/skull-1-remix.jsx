import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4z340b3u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4z340b3u"/>`,
		"fallback": "streamline:skull-1-remix",
	});
}

export default Component;
