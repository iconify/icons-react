import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m09ey7kqu.css';
import '../../css/k/kltq48bze.css';
import '../../css/p/priikhbhb.css';
import '../../css/y/ym38t2bqf.css';
import '../../css/f/fndzf-b4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m09ey7kqu"/><path class="kltq48bze"/><path class="priikhbhb"/><path class="ym38t2bqf"/><path class="fndzf-b4f"/></g>`,
		"fallback": "iconaut:palette",
	});
}

export default Component;
