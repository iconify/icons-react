import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0ar6obby.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0ar6obby"/>`,
		"fallback": "foundation:subscript",
	});
}

export default Component;
