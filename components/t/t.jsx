import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxlqv8b6j.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxlqv8b6j"/>`,
		"fallback": "whh:t",
	});
}

export default Component;
