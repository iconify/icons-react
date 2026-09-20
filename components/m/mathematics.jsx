import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whq-7tb5z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whq-7tb5z"/>`,
		"fallback": "ooui:mathematics",
	});
}

export default Component;
