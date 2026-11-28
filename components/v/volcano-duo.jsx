import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7z2q9nlb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oxrujcyco.css';
import '../../css/c/c589ueb5l.css';
import '../../css/f/f_hosvf1s.css';
import '../../css/i/icup3-hnn.css';
import '../../css/z/ziipvshqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7z2q9nlb secondary"/><g class="dt0cm9dhy primary"><path class="oxrujcyco"/><path class="c589ueb5l"/><path class="f_hosvf1s"/><path class="icup3-hnn"/><path class="ziipvshqc"/></g>`,
		"fallback": "iconaut:volcano-duo",
	});
}

export default Component;
