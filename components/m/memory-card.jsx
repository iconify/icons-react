import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi97gm6_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi97gm6_j"/>`,
		"fallback": "bxs:memory-card",
	});
}

export default Component;
