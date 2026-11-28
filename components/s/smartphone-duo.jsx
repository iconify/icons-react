import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s05lsoo0a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d6z50yb1i.css';
import '../../css/c/c_8ts8c3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s05lsoo0a secondary"/><g class="dt0cm9dhy primary"><path class="d6z50yb1i"/><path class="c_8ts8c3o"/></g>`,
		"fallback": "iconaut:smartphone-duo",
	});
}

export default Component;
