import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdneszcxu.css';

const viewBox = {"width":384,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdneszcxu"/>`,
		"fallback": "zmdi:smartphone-erase",
	});
}

export default Component;
