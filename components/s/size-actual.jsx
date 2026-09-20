import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de-x6ubrj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de-x6ubrj"/>`,
		"fallback": "simple-line-icons:size-actual",
	});
}

export default Component;
