import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1-x7w-ua.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1-x7w-ua"/>`,
		"fallback": "ep:refresh-right",
	});
}

export default Component;
