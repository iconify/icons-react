import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl4v37xzh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl4v37xzh"/>`,
		"fallback": "la:italic",
	});
}

export default Component;
