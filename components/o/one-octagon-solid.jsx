import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc7erx8nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc7erx8nu"/>`,
		"fallback": "mynaui:one-octagon-solid",
	});
}

export default Component;
