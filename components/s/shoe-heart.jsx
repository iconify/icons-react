import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-8zaccyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-8zaccyd"/>`,
		"fallback": "noviair:shoe-heart",
	});
}

export default Component;
