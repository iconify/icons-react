import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/die20-bcf.css';
import '../../css/q/qqww5s1hy.css';
import '../../css/p/pd8vt0rck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><circle class="die20-bcf"/><path class="qqww5s1hy"/><path class="pd8vt0rck"/></g>`,
		"fallback": "iconaut:route-arrow",
	});
}

export default Component;
