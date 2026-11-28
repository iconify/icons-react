import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lz4w1hvbo.css';
import '../../css/q/q_1y_n85o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lz4w1hvbo"/><path class="q_1y_n85o"/></g>`,
		"fallback": "iconaut:shadow",
	});
}

export default Component;
