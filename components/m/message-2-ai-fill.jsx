import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo-p9zbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo-p9zbnf"/>`,
		"fallback": "mingcute:message-2-ai-fill",
	});
}

export default Component;
