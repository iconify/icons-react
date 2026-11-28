import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5qwnydjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5qwnydjv primary"/>`,
		"fallback": "iconaut:type-off-duotone",
	});
}

export default Component;
