import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcg4t3b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcg4t3b9s"/>`,
		"fallback": "hugeicons:menu-05",
	});
}

export default Component;
