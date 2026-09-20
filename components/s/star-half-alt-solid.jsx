import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgij2qbdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgij2qbdv"/>`,
		"fallback": "la:star-half-alt-solid",
	});
}

export default Component;
