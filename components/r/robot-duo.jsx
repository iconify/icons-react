import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp4y2o2dy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qk02rk5oc.css';
import '../../css/l/l6k4qhb5r.css';
import '../../css/o/on25g_baf.css';
import '../../css/i/icgal8prs.css';
import '../../css/d/du1e6ebuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sp4y2o2dy"/><g class="dt0cm9dhy primary"><path class="qk02rk5oc"/><path class="l6k4qhb5r"/><path class="on25g_baf"/><path class="icgal8prs"/><path class="du1e6ebuy"/></g>`,
		"fallback": "iconaut:robot-duo",
	});
}

export default Component;
