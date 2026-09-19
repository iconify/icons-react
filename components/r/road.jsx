import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz-l9cc9u.css';

const viewBox = {"width":1856,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz-l9cc9u"/>`,
		"fallback": "fa:road",
	});
}

export default Component;
