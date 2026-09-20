import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wws1cbc7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wws1cbc7q"/>`,
		"fallback": "ri:speak-ai-line",
	});
}

export default Component;
