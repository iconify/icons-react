import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srib6xo9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srib6xo9k"/>`,
		"fallback": "boxicons:plane-take-off",
	});
}

export default Component;
