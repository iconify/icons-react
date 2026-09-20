import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yef25-vzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yef25-vzo"/>`,
		"fallback": "ri:pentagon-fill",
	});
}

export default Component;
