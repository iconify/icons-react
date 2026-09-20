import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfypyr0gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfypyr0gi"/>`,
		"fallback": "mdi:paperclip",
	});
}

export default Component;
