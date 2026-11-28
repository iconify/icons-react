import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbhk-2bhh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3heq6b6w.css';
import '../../css/i/ip-lweb_e.css';
import '../../css/j/jmt_hp8qh.css';
import '../../css/q/qj4rgrb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbhk-2bhh secondary"/><g class="dt0cm9dhy primary"><path class="n3heq6b6w"/><path class="ip-lweb_e"/><path class="jmt_hp8qh"/><path class="qj4rgrb1m"/></g>`,
		"fallback": "iconaut:teacher-duo",
	});
}

export default Component;
