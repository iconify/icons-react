import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utg5x7c1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utg5x7c1u"/>`,
		"fallback": "hugeicons:vector-square",
	});
}

export default Component;
