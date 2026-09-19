import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t63-sob-r.css';
import '../../css/w/wib432g-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t63-sob-r"/><path class="wib432g-z"/>`,
		"fallback": "circum:percent",
	});
}

export default Component;
