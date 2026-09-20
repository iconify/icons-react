import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu1_g3u7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu1_g3u7g"/>`,
		"fallback": "mdi:message-text-clock-outline",
	});
}

export default Component;
