import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e8da9ybaj.css';
import '../../css/t/t2qbx5bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e8da9ybaj"/><path class="t2qbx5bly"/></g>`,
		"fallback": "iconaut:list-plus-duo",
	});
}

export default Component;
