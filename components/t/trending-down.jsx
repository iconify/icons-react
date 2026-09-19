import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu6gvgb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu6gvgb6o"/>`,
		"fallback": "boxicons:trending-down",
	});
}

export default Component;
