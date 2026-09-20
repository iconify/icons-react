import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hflz93b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hflz93b1q"/>`,
		"fallback": "streamline-cyber:user-chat-4",
	});
}

export default Component;
