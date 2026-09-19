import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye3ug6bbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye3ug6bbu"/>`,
		"fallback": "carbon:text-align-center",
	});
}

export default Component;
