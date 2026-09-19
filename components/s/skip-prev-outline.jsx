import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4x9_2bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4x9_2bmr"/>`,
		"fallback": "iconoir:skip-prev-outline",
	});
}

export default Component;
