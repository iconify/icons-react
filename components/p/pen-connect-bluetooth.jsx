import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u06_j4b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u06_j4b9n"/>`,
		"fallback": "iconoir:pen-connect-bluetooth",
	});
}

export default Component;
