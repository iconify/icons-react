import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5q7f7bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5q7f7bps"/>`,
		"fallback": "noviair-light:rows-3",
	});
}

export default Component;
