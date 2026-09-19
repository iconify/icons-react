import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji_0ycbwc.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji_0ycbwc"/>`,
		"fallback": "whh:origami",
	});
}

export default Component;
