import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dndzo0oqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dndzo0oqd"/>`,
		"fallback": "thesvg-color:onestream",
	});
}

export default Component;
