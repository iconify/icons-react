import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7x-tob6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7x-tob6m"/>`,
		"fallback": "mingcute:terminal-ai-line",
	});
}

export default Component;
