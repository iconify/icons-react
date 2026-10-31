import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/temg2yb-s.css';
import '../../css/n/n8yy-0bxa.css';
import '../../css/h/hmrca1hzs.css';
import '../../css/s/sx0vpzc7d.css';
import '../../css/o/owdcv17fj.css';
import '../../css/h/hyyhoebhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="temg2yb-s wm-shadow"/><path class="n8yy-0bxa"/><path class="hmrca1hzs"/><path class="sx0vpzc7d"/><path class="owdcv17fj"/><path class="hyyhoebhj"/></g>`,
		"fallback": "withicons-retro:timer",
	});
}

export default Component;
