import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwly73l6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwly73l6z"/>`,
		"fallback": "thesvg:victron-energy",
	});
}

export default Component;
