import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5oe30boy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5oe30boy"/>`,
		"fallback": "fa7-solid:rotate-forward",
	});
}

export default Component;
