import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjs1_he5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjs1_he5e"/>`,
		"fallback": "iconoir:snow",
	});
}

export default Component;
