import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pp2fsffpp.css';
import '../../css/c/c83_f-2nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pp2fsffpp"/><path class="c83_f-2nk"/></g>`,
		"fallback": "iconaut:soda-bottle",
	});
}

export default Component;
