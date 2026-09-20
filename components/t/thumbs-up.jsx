import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co5gvya4i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co5gvya4i"/>`,
		"fallback": "la:thumbs-up",
	});
}

export default Component;
