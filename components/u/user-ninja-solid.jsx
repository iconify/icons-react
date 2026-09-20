import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx53_bcxn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx53_bcxn"/>`,
		"fallback": "la:user-ninja-solid",
	});
}

export default Component;
