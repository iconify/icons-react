import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdy-seb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdy-seb3l"/>`,
		"fallback": "mdi:keyboard-close",
	});
}

export default Component;
