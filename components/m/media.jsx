import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6wx27b5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6wx27b5b"/>`,
		"fallback": "subway:media",
	});
}

export default Component;
