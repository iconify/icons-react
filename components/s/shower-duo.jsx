import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4_eihb_d.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dv5gz4bfo.css';
import '../../css/i/i77jj_b8u.css';
import '../../css/q/qqfouabbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4_eihb_d secondary"/><g class="dt0cm9dhy primary"><path class="dv5gz4bfo"/><path class="i77jj_b8u"/><path class="qqfouabbp"/></g>`,
		"fallback": "iconaut:shower-duo",
	});
}

export default Component;
