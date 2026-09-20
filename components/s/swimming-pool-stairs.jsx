import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d36d0zr1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d36d0zr1y"/>`,
		"fallback": "streamline-ultimate:swimming-pool-stairs",
	});
}

export default Component;
