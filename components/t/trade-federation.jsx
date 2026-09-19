import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3k_xj7cj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3k_xj7cj"/>`,
		"fallback": "fa7-brands:trade-federation",
	});
}

export default Component;
