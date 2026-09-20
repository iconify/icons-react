import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jppv-o5ye.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jppv-o5ye"/>`,
		"fallback": "system-uicons:ticket",
	});
}

export default Component;
