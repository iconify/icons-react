import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn2ejlbtm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ixy2n-l-q.css';
import '../../css/f/f_lh8wj9r.css';
import '../../css/r/ru0tiy9dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn2ejlbtm secondary"/><g class="dt0cm9dhy primary"><path class="ixy2n-l-q"/><path class="f_lh8wj9r"/><path class="ru0tiy9dz"/></g>`,
		"fallback": "iconaut:mountain-snow-duo",
	});
}

export default Component;
