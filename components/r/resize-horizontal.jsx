import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-knu7bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-knu7bhr"/>`,
		"fallback": "mdi:resize-horizontal",
	});
}

export default Component;
