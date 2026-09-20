import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhj5f0b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhj5f0b4e"/>`,
		"fallback": "mingcute:quill-pen-ai-fill",
	});
}

export default Component;
