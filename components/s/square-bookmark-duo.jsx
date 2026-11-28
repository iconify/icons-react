import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz4xt1bwd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/f/f8t3o_b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz4xt1bwd secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="f8t3o_b-l"/></g>`,
		"fallback": "iconaut:square-bookmark-duo",
	});
}

export default Component;
