import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhdqeq3jz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhdqeq3jz"/>`,
		"fallback": "ooui:list-numbered-rtl",
	});
}

export default Component;
