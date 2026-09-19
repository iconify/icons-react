import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y47ge5b2d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y47ge5b2d"/>`,
		"fallback": "ep:tools",
	});
}

export default Component;
