import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx4b6zb0j.css';

const viewBox = {"width":250,"height":127.556};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx4b6zb0j"/>`,
		"fallback": "thesvg-color:the-economist",
	});
}

export default Component;
