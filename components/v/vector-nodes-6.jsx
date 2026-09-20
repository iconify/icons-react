import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5zq6fb5o.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5zq6fb5o"/>`,
		"fallback": "lineicons:vector-nodes-6",
	});
}

export default Component;
