import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx1hgj_mp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z1k_-1b8m.css';
import '../../css/a/au49bsasu.css';
import '../../css/e/eoiwwh5op.css';
import '../../css/c/cg8l8si9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx1hgj_mp secondary"/><g class="dt0cm9dhy primary"><path class="z1k_-1b8m"/><path class="au49bsasu"/><path class="eoiwwh5op"/><path class="cg8l8si9s"/></g>`,
		"fallback": "iconaut:watch-duo",
	});
}

export default Component;
