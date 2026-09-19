import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca3p3fdcl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca3p3fdcl"/>`,
		"fallback": "carbon:letter-ss",
	});
}

export default Component;
