import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/t/tv4sijtxc.css';
import '../../css/c/cj57dzbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j2vbli9go"/><path class="tv4sijtxc"/><path class="cj57dzbma"/></g>`,
		"fallback": "iconaut:shield-cog",
	});
}

export default Component;
