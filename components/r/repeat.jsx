import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g72s45xtx.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g72s45xtx"/>`,
		"fallback": "whh:repeat",
	});
}

export default Component;
