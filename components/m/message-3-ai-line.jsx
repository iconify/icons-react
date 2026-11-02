import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipjfvdb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipjfvdb9p"/>`,
		"fallback": "mingcute:message-3-ai-line",
	});
}

export default Component;
