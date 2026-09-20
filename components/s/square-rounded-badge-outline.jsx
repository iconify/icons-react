import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thp9z3b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thp9z3b5v"/>`,
		"fallback": "mdi:square-rounded-badge-outline",
	});
}

export default Component;
