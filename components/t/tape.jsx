import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hun52_6rr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hun52_6rr"/>`,
		"fallback": "fa-solid:tape",
	});
}

export default Component;
