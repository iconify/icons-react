import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0h0k7b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0h0k7b3l"/>`,
		"fallback": "cbi:lily-two",
	});
}

export default Component;
