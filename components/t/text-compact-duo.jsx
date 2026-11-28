import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9v85de3k.css';
import '../../css/n/nhknek4be.css';
import '../../css/a/a2e2ku32f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m9v85de3k"/><path class="nhknek4be"/><path class="a2e2ku32f"/></g>`,
		"fallback": "iconaut:text-compact-duo",
	});
}

export default Component;
