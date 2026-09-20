import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvpsj6bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvpsj6bfj"/>`,
		"fallback": "typcn:point-of-interest-outline",
	});
}

export default Component;
