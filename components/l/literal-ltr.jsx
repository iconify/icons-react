import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg46qpbqz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg46qpbqz"/>`,
		"fallback": "ooui:literal-ltr",
	});
}

export default Component;
