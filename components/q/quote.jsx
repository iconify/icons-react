import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hx81_7bns.css';
import '../../css/x/xes07eans.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hx81_7bns"/><path class="xes07eans"/></g>`,
		"fallback": "iconaut:quote",
	});
}

export default Component;
