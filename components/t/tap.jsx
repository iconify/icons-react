import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0-xzacyx.css';
import '../../css/i/i6whcnmcj.css';
import '../../css/x/xczcw10qs.css';
import '../../css/w/we4rjob8q.css';
import '../../css/h/h-g8yzq_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t0-xzacyx"/><path class="i6whcnmcj"/><path class="xczcw10qs"/><path class="we4rjob8q"/><path class="h-g8yzq_q"/></g>`,
		"fallback": "iconaut:tap",
	});
}

export default Component;
