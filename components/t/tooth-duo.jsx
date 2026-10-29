import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tug-0ys7g.css';
import '../../css/w/wjf1ikbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tug-0ys7g"/><path class="wjf1ikbgx"/></g>`,
		"fallback": "withicons:tooth-duo",
	});
}

export default Component;
