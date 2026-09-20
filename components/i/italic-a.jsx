import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/funjsb_-c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="funjsb_-c"/>`,
		"fallback": "ooui:italic-a",
	});
}

export default Component;
