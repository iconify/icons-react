import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvtngln5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvtngln5r"/>`,
		"fallback": "mdi:trans-fat-off",
	});
}

export default Component;
