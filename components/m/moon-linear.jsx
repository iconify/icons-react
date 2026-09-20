import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjc34rbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjc34rbvb"/>`,
		"fallback": "solar:moon-linear",
	});
}

export default Component;
