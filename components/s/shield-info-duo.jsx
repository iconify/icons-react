import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyfsf1tvs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/w/wuisdbb7q.css';
import '../../css/a/a30-22bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyfsf1tvs secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="wuisdbb7q"/><path class="a30-22bye"/></g>`,
		"fallback": "iconaut:shield-info-duo",
	});
}

export default Component;
