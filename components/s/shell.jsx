import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy-1rpbyx.css';

const viewBox = {"width":1024,"height":833};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy-1rpbyx"/>`,
		"fallback": "whh:shell",
	});
}

export default Component;
