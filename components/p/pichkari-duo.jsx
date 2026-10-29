import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/od9f96bil.css';
import '../../css/j/jyql6cckb.css';
import '../../css/w/we4z7ebtz.css';
import '../../css/q/qijubub1d.css';
import '../../css/n/ni02kfb9h.css';
import '../../css/g/g2sik5moa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="od9f96bil"/><path class="jyql6cckb"/><path class="we4z7ebtz wm-s"/><path class="qijubub1d"/><path class="ni02kfb9h"/><path class="g2sik5moa wm-a"/></g>`,
		"fallback": "withicons:pichkari-duo",
	});
}

export default Component;
