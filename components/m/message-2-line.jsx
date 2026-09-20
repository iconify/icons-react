import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-1i81bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-1i81bqj"/>`,
		"fallback": "ri:message-2-line",
	});
}

export default Component;
