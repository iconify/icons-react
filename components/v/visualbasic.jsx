import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n30y6gq7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n30y6gq7m"/>`,
		"fallback": "simple-icons:visualbasic",
	});
}

export default Component;
