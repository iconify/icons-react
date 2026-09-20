import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmz1t60mu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmz1t60mu"/>`,
		"fallback": "zondicons:thumbs-up",
	});
}

export default Component;
