import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rya5icc7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rya5icc7a"/>`,
		"fallback": "noviair-light:user-square-check",
	});
}

export default Component;
