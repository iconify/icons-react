import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3w-42zej.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3w-42zej"/>`,
		"fallback": "fluent-mdl2:post-update",
	});
}

export default Component;
