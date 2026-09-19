import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_-xr7byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_-xr7byo"/>`,
		"fallback": "boxicons:puck",
	});
}

export default Component;
