import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/objv1ybmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="objv1ybmj"/>`,
		"fallback": "iconaut:shield-star-solid",
	});
}

export default Component;
