import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2d-j64pw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2d-j64pw"/>`,
		"fallback": "la:paw-solid",
	});
}

export default Component;
