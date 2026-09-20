import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g208nobwy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g208nobwy"/>`,
		"fallback": "la:restroom-solid",
	});
}

export default Component;
