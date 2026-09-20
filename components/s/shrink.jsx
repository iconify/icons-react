import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg47dm5zr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg47dm5zr"/>`,
		"fallback": "picon:shrink",
	});
}

export default Component;
