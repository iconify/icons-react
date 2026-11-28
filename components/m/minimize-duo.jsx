import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jps-8y66p.css';
import '../../css/u/uzyok4b_v.css';
import '../../css/v/v76nrbb3g.css';
import '../../css/l/lbgz0jbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jps-8y66p"/><path class="uzyok4b_v"/><path class="v76nrbb3g"/><path class="lbgz0jbln"/></g>`,
		"fallback": "iconaut:minimize-duo",
	});
}

export default Component;
