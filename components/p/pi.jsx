import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zd6c9pgot.css';
import '../../css/u/uubbag10g.css';
import '../../css/z/zzh94_b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zd6c9pgot"/><path class="uubbag10g"/><path class="zzh94_b3i"/></g>`,
		"fallback": "iconaut:pi",
	});
}

export default Component;
