import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp_j9ybua.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp_j9ybua"/>`,
		"fallback": "la:thumbtack-solid",
	});
}

export default Component;
