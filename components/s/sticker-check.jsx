import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcsh3jbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcsh3jbof"/>`,
		"fallback": "mdi:sticker-check",
	});
}

export default Component;
