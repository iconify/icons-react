import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/w/wgr0qgbwv.css';
import '../../css/l/lm4pd1bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j2vbli9go"/><path class="wgr0qgbwv"/><path class="lm4pd1bxp"/></g>`,
		"fallback": "iconaut:shield-search",
	});
}

export default Component;
