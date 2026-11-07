import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn68y7huu.css';
import '../../css/h/hwymrt-6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn68y7huu"/><path class="hwymrt-6b"/>`,
		"fallback": "solar:podcast-bold",
	});
}

export default Component;
