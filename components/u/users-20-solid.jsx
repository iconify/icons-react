import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljunqw1on.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljunqw1on"/>`,
		"fallback": "heroicons:users-20-solid",
	});
}

export default Component;
