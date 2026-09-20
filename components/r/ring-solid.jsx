import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0i8p3mks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0i8p3mks"/>`,
		"fallback": "la:ring-solid",
	});
}

export default Component;
