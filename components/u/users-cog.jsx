import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w991bab4r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w991bab4r"/>`,
		"fallback": "la:users-cog",
	});
}

export default Component;
