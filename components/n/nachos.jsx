import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8e32kbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8e32kbig"/>`,
		"fallback": "griddy-icons:nachos",
	});
}

export default Component;
