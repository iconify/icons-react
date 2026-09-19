import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrkdgzw8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrkdgzw8c"/>`,
		"fallback": "guidance:no-fishing-1",
	});
}

export default Component;
