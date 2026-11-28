import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwr-ufcpq.css';
import '../../css/a/ay1-hpebq.css';
import '../../css/o/olwkaeqqd.css';
import '../../css/o/o-q7-kbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jwr-ufcpq"/><path class="ay1-hpebq"/><path class="olwkaeqqd"/><path class="o-q7-kbqh"/></g>`,
		"fallback": "iconaut:snail",
	});
}

export default Component;
