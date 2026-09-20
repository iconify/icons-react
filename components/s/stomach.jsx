import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y29r7jb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y29r7jb_n"/>`,
		"fallback": "mdi:stomach",
	});
}

export default Component;
