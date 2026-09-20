import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rroxyv3ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rroxyv3ky"/>`,
		"fallback": "simple-icons:snowpack",
	});
}

export default Component;
