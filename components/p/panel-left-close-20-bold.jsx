import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i00v-b3kp.css';
import '../../css/c/cj81ctblr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i00v-b3kp"/><path class="cj81ctblr"/>`,
		"fallback": "energy-icons:panel-left-close-20-bold",
	});
}

export default Component;
