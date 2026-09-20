import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp2x7ac1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp2x7ac1q"/>`,
		"fallback": "la:user-alt-solid",
	});
}

export default Component;
