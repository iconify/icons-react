import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd48whbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd48whbfr"/>`,
		"fallback": "dashicons:vault",
	});
}

export default Component;
