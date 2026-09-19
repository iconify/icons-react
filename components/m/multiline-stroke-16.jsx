import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs423rb-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs423rb-x"/>`,
		"fallback": "garden:multiline-stroke-16",
	});
}

export default Component;
