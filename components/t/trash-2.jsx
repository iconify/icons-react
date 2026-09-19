import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyhn3o41r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyhn3o41r"/>`,
		"fallback": "feather:trash-2",
	});
}

export default Component;
