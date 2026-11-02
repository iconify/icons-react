import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjz2s1uvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjz2s1uvx"/>`,
		"fallback": "mingcute:message-1-ai-line",
	});
}

export default Component;
