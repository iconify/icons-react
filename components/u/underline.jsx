import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss20alb2l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss20alb2l"/>`,
		"fallback": "oi:underline",
	});
}

export default Component;
