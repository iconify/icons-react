import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cut2yy4rh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cut2yy4rh"/>`,
		"fallback": "fa6-brands:opensuse",
	});
}

export default Component;
