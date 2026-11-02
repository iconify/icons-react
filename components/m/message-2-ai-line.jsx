import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trf6ifbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trf6ifbqz"/>`,
		"fallback": "mingcute:message-2-ai-line",
	});
}

export default Component;
