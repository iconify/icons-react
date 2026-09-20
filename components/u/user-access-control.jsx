import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll8y8vutm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll8y8vutm"/>`,
		"fallback": "mdi:user-access-control",
	});
}

export default Component;
