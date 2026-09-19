import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju8vq4b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju8vq4b2y"/>`,
		"fallback": "boxicons:steps-down",
	});
}

export default Component;
