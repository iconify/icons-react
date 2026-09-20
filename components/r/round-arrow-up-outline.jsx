import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5dqewvcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5dqewvcp"/>`,
		"fallback": "solar:round-arrow-up-outline",
	});
}

export default Component;
