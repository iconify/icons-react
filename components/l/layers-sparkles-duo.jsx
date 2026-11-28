import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4grobig.css';
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
		"content": `<path class="bp4grobig secondary"/><g class="dt0cm9dhy primary"><path class="vpst-w2dv"/><path class="obphd_b_m"/><path class="ixlpo7bwo"/><path class="hbscqzbjs"/></g>`,
		"fallback": "iconaut:layers-sparkles-duo",
	});
}

export default Component;
