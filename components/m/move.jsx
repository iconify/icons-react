import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd9fd8ybb.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd9fd8ybb"/>`,
		"fallback": "whh:move",
	});
}

export default Component;
