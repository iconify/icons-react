import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/td00sn06k.css';
import '../../css/y/yc5-7oenb.css';
import '../../css/e/euj49csjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="td00sn06k"/><path class="wm-a yc5-7oenb"/><path class="euj49csjz"/></g>`,
		"fallback": "withicons:terminal-duo",
	});
}

export default Component;
