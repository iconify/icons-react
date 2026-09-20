import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-8nb7x6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-8nb7x6r"/>`,
		"fallback": "tdesign:transform-1-filled",
	});
}

export default Component;
