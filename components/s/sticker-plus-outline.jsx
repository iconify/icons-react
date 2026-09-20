import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fltzu3bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fltzu3bly"/>`,
		"fallback": "mdi:sticker-plus-outline",
	});
}

export default Component;
