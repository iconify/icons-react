import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0inoxbwh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0inoxbwh"/>`,
		"fallback": "ooui:strikethrough-y",
	});
}

export default Component;
