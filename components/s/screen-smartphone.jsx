import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy9np2b1h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy9np2b1h"/>`,
		"fallback": "simple-line-icons:screen-smartphone",
	});
}

export default Component;
