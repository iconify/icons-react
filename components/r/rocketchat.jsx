import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6al3feuh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6al3feuh"/>`,
		"fallback": "fa7-brands:rocketchat",
	});
}

export default Component;
