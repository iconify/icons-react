import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgdi6d99q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgdi6d99q"/>`,
		"fallback": "uil:right-to-left-text-direction",
	});
}

export default Component;
