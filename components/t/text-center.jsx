import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgt9wsb6t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgt9wsb6t"/>`,
		"fallback": "quill:text-center",
	});
}

export default Component;
