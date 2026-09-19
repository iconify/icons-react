import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp6ggp7mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp6ggp7mt"/>`,
		"fallback": "hugeicons:student",
	});
}

export default Component;
