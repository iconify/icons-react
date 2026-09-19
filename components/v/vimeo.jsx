import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc9fj215m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc9fj215m"/>`,
		"fallback": "fa7-brands:vimeo",
	});
}

export default Component;
