import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwq8n3bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwq8n3bhq"/>`,
		"fallback": "mingcute:mic-ai-line",
	});
}

export default Component;
