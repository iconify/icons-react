import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc6xhac8s.css';
import '../../css/b/bgwitbc3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc6xhac8s"/><path class="bgwitbc3y"/>`,
		"fallback": "streamline-freehand:messages-bubble-menu",
	});
}

export default Component;
