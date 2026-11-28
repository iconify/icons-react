import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv90sjbvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vyks3abws.css';
import '../../css/r/ryc81jbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv90sjbvj secondary"/><g class="dt0cm9dhy primary"><path class="vyks3abws"/><path class="ryc81jbwe"/></g>`,
		"fallback": "iconaut:sticky-note-duo",
	});
}

export default Component;
