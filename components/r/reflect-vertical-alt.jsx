import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5-6tkbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5-6tkbbn"/>`,
		"fallback": "boxicons:reflect-vertical-alt",
	});
}

export default Component;
