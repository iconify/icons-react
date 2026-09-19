import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3f_a9bdn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3f_a9bdn"/>`,
		"fallback": "fa7-brands:square-tumblr",
	});
}

export default Component;
