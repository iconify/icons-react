import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap8s5ibrc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/c/chkx7cvvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap8s5ibrc secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="chkx7cvvy"/></g>`,
		"fallback": "iconaut:shield-heart-duo",
	});
}

export default Component;
