import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4_7t_bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4_7t_bwz"/>`,
		"fallback": "hugeicons:sorting-04",
	});
}

export default Component;
