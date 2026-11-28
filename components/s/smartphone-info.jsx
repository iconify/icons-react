import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm6nef19u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm6nef19u"/>`,
		"fallback": "noviair:smartphone-info",
	});
}

export default Component;
