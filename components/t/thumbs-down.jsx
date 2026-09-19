import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm0ynk4zr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm0ynk4zr"/>`,
		"fallback": "dashicons:thumbs-down",
	});
}

export default Component;
