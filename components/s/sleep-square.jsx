import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-8f7s1ry.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-8f7s1ry"/>`,
		"fallback": "vs:sleep-square",
	});
}

export default Component;
