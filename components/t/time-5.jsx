import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1jvchi8r.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1jvchi8r"/>`,
		"fallback": "wi:time-5",
	});
}

export default Component;
