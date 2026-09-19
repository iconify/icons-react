import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0yfrvl6x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0yfrvl6x"/>`,
		"fallback": "garden:rocket-stroke-16",
	});
}

export default Component;
