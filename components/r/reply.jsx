import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz_-kvbkl.css';

const viewBox = {"width":768,"height":656};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz_-kvbkl"/>`,
		"fallback": "ls:reply",
	});
}

export default Component;
