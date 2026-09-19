import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1yp1-b8j.css';
import '../../css/w/w9k2w_r8o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1yp1-b8j"/><path class="w9k2w_r8o"/>`,
		"fallback": "carbon:spell-check",
	});
}

export default Component;
