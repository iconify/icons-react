import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qczb0h48q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qczb0h48q"/>`,
		"fallback": "mingcute:rss-2-fill",
	});
}

export default Component;
