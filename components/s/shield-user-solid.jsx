import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on85g6bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on85g6bhf"/>`,
		"fallback": "withicons:shield-user-solid",
	});
}

export default Component;
