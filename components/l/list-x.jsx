import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e8da9ybaj.css';
import '../../css/j/jjd9e34gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e8da9ybaj"/><path class="jjd9e34gu"/></g>`,
		"fallback": "iconaut:list-x",
	});
}

export default Component;
