import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4zscvu3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4zscvu3m"/>`,
		"fallback": "iconoir:loft-3d",
	});
}

export default Component;
