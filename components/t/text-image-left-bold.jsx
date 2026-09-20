import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbgfbfo-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbgfbfo-q"/>`,
		"fallback": "streamline-ultimate:text-image-left-bold",
	});
}

export default Component;
