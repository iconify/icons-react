import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9o_g8hmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9o_g8hmv"/>`,
		"fallback": "noviair-light:soccer-ball",
	});
}

export default Component;
