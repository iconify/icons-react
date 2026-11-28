import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csb1qxakk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csb1qxakk"/>`,
		"fallback": "noviair-light:teapot-heart",
	});
}

export default Component;
