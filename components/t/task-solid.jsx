import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjp6_9bgr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjp6_9bgr"/>`,
		"fallback": "fluent-mdl2:task-solid",
	});
}

export default Component;
