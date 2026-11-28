import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4c8j9fyr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4c8j9fyr"/>`,
		"fallback": "pullo:user-x-light",
	});
}

export default Component;
