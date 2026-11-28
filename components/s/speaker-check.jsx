import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy9m0zb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy9m0zb9j"/>`,
		"fallback": "noviair-light:speaker-check",
	});
}

export default Component;
