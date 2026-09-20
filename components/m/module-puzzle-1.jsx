import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6p0mq7cd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6p0mq7cd"/>`,
		"fallback": "streamline:module-puzzle-1",
	});
}

export default Component;
