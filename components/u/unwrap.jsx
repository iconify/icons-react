import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-5ht6mav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-5ht6mav"/>`,
		"fallback": "mdi:unwrap",
	});
}

export default Component;
