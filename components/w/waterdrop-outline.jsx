import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uskchin6p.css';
import '../../css/r/rij0rxuxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uskchin6p"/><path clip-rule="evenodd" class="rij0rxuxr"/>`,
		"fallback": "solar:waterdrop-outline",
	});
}

export default Component;
