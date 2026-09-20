import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz8lk4b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz8lk4b2z"/>`,
		"fallback": "thesvg:racket",
	});
}

export default Component;
