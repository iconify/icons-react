import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaay6bb8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaay6bb8k"/>`,
		"fallback": "ooui:strikethrough-s",
	});
}

export default Component;
