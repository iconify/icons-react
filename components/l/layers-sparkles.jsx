import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vpst-w2dv.css';
import '../../css/o/obphd_b_m.css';
import '../../css/i/ixlpo7bwo.css';
import '../../css/h/hbscqzbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vpst-w2dv"/><path class="obphd_b_m"/><path class="ixlpo7bwo"/><path class="hbscqzbjs"/></g>`,
		"fallback": "iconaut:layers-sparkles",
	});
}

export default Component;
