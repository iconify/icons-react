import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vuoqaq_eg.css';
import '../../css/e/eklyoobtc.css';
import '../../css/r/rq0ambctr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vuoqaq_eg"/><path class="eklyoobtc"/><path class="rq0ambctr"/></g>`,
		"fallback": "iconaut:list-ordered",
	});
}

export default Component;
