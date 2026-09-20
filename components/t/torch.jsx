import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khw-9n4qe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khw-9n4qe"/>`,
		"fallback": "picon:torch",
	});
}

export default Component;
