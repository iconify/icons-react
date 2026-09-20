import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9s7qk7ci.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9s7qk7ci"/>`,
		"fallback": "simple-line-icons:pin",
	});
}

export default Component;
