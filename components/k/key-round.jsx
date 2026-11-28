import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go_1ac-5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go_1ac-5q"/>`,
		"fallback": "noviair-light:key-round",
	});
}

export default Component;
