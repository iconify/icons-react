import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqe5b6w_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqe5b6w_u"/>`,
		"fallback": "thesvg-color:stepfun",
	});
}

export default Component;
