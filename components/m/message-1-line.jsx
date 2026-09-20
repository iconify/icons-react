import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy-g8lbjc.css';
import '../../css/t/tykix6bve.css';
import '../../css/p/p9m9lkbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy-g8lbjc"/><path class="tykix6bve"/><path class="p9m9lkbmh"/>`,
		"fallback": "mingcute:message-1-line",
	});
}

export default Component;
