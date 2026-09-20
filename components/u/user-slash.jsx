import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgnp9cbqu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgnp9cbqu"/>`,
		"fallback": "la:user-slash",
	});
}

export default Component;
