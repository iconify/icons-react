import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb5qpacyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fb5qpacyj"/>`,
		"fallback": "solar:music-note-2-outline",
	});
}

export default Component;
