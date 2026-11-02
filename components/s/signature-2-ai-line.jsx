import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whkzpac3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whkzpac3q"/>`,
		"fallback": "mingcute:signature-2-ai-line",
	});
}

export default Component;
