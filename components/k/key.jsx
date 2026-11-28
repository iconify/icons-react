import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yg19ojb2y.css';
import '../../css/u/udesl-8lq.css';
import '../../css/k/kccmp_b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yg19ojb2y"/><path class="udesl-8lq"/><path class="kccmp_b5b"/></g>`,
		"fallback": "iconaut:key",
	});
}

export default Component;
