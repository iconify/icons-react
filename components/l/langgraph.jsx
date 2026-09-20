import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrnl9w13i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrnl9w13i"/>`,
		"fallback": "simple-icons:langgraph",
	});
}

export default Component;
