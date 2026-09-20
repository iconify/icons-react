import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0tvro18e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0tvro18e"/>`,
		"fallback": "ri:reply-line",
	});
}

export default Component;
