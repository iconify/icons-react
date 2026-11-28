import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh9dy1eza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh9dy1eza"/>`,
		"fallback": "noviair-light:podcast-off",
	});
}

export default Component;
