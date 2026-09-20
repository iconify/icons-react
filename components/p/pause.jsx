import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glfie7b8r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glfie7b8r"/>`,
		"fallback": "pepicons-pencil:pause",
	});
}

export default Component;
