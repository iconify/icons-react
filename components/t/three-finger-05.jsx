import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-js4h4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-js4h4q"/>`,
		"fallback": "hugeicons:three-finger-05",
	});
}

export default Component;
