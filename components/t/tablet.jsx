import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nja9a3b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nja9a3b4r"/>`,
		"fallback": "noviair-light:tablet",
	});
}

export default Component;
