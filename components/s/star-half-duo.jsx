import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m08t2fb5l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vxnjoccwe.css';
import '../../css/u/u_4blpxzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m08t2fb5l secondary"/><g class="dt0cm9dhy primary"><path class="vxnjoccwe"/><path class="u_4blpxzy"/></g>`,
		"fallback": "iconaut:star-half-duo",
	});
}

export default Component;
