import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys4h6ub3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys4h6ub3k"/>`,
		"fallback": "fa6-solid:magnifying-glass-location",
	});
}

export default Component;
