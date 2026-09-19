import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee-9a1ddt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee-9a1ddt"/>`,
		"fallback": "gridicons:star-outline",
	});
}

export default Component;
