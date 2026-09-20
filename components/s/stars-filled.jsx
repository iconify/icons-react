import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3-9p7b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3-9p7b-r"/>`,
		"fallback": "reicon:stars-filled",
	});
}

export default Component;
