import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j58uu9b3y.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j58uu9b3y"/>`,
		"fallback": "foundation:previous",
	});
}

export default Component;
