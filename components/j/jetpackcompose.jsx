import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4uwu8bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4uwu8bbb"/>`,
		"fallback": "simple-icons:jetpackcompose",
	});
}

export default Component;
