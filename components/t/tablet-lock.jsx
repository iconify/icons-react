import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yogw2bbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yogw2bbog"/>`,
		"fallback": "noviair-light:tablet-lock",
	});
}

export default Component;
