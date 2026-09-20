import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzw4rrtho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzw4rrtho"/>`,
		"fallback": "thesvg:riseup",
	});
}

export default Component;
