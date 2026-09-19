import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1iipibae.css';

const viewBox = {"width":769,"height":712};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1iipibae"/>`,
		"fallback": "ls:sepia",
	});
}

export default Component;
