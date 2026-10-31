import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ph3e9pyxc.css';
import '../../css/g/gi9hafbqp.css';
import '../../css/s/swx5ysb8b.css';
import '../../css/p/prncdgd_l.css';
import '../../css/o/ojr6d8bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ph3e9pyxc wm-shadow"/><path class="gi9hafbqp"/><path class="swx5ysb8b"/><path class="prncdgd_l"/><path class="ojr6d8bqc"/></g>`,
		"fallback": "withicons-retro:ungroup",
	});
}

export default Component;
