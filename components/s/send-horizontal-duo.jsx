import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v47ok504d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g5fxtgbyo.css';
import '../../css/v/vlzq7tbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v47ok504d"/><g class="dt0cm9dhy primary"><path class="g5fxtgbyo"/><path class="vlzq7tbuf"/></g>`,
		"fallback": "iconaut:send-horizontal-duo",
	});
}

export default Component;
