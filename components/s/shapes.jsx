import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u87oa6srz.css';
import '../../css/o/oy50g1bab.css';
import '../../css/q/q0dt6ib3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u87oa6srz"/><path class="oy50g1bab"/><path class="q0dt6ib3s"/></g>`,
		"fallback": "iconaut:shapes",
	});
}

export default Component;
