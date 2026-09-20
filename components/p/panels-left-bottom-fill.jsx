import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc5-p1byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc5-p1byx"/>`,
		"fallback": "keyline-icons:panels-left-bottom-fill",
	});
}

export default Component;
