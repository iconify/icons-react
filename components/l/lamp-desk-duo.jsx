import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q_x4lp40o.css';
import '../../css/l/lx6vztc2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q_x4lp40o"/><path class="lx6vztc2v"/></g>`,
		"fallback": "withicons:lamp-desk-duo",
	});
}

export default Component;
