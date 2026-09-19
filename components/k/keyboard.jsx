import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpno0ub3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dpno0ub3n"/>`,
		"fallback": "griddy-icons:keyboard",
	});
}

export default Component;
