import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y71q3cb6w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y71q3cb6w"/>`,
		"fallback": "pullo:postcard-bold",
	});
}

export default Component;
