import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvkcdmb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvkcdmb8g"/>`,
		"fallback": "streamline-ultimate:messages-bubble-square-typing-bold",
	});
}

export default Component;
