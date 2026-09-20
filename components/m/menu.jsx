import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm6fy4buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm6fy4buw"/>`,
		"fallback": "mdi-light:menu",
	});
}

export default Component;
