import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhecyob8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhecyob8y"/>`,
		"fallback": "mingcute:quill-pen-ai-line",
	});
}

export default Component;
