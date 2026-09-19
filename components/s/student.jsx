import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axeen7-9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axeen7-9u"/>`,
		"fallback": "icons8:student",
	});
}

export default Component;
