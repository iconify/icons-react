import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myyy2316e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myyy2316e"/>`,
		"fallback": "thesvg-color:thanos",
	});
}

export default Component;
