import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i448nnfhx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rmt2jqj-j.css';
import '../../css/a/aiipvobyb.css';
import '../../css/r/r0dxi9bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i448nnfhx secondary"/><g class="dt0cm9dhy primary"><path class="rmt2jqj-j"/><path class="aiipvobyb"/><path class="r0dxi9bwk"/></g>`,
		"fallback": "iconaut:memory-stick-duo",
	});
}

export default Component;
