import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn5gx4_1n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn5gx4_1n"/>`,
		"fallback": "quill:signature",
	});
}

export default Component;
