import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5fo8xbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5fo8xbwj"/>`,
		"fallback": "mingcute:mail-ai-line",
	});
}

export default Component;
