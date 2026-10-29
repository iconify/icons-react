import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfg0anbux.css';
import '../../css/x/x0wfh-5ox.css';
import '../../css/l/l0_8r-6fb.css';
import '../../css/y/yakhjr-at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kfg0anbux"/><path class="wm-a x0wfh-5ox"/><path class="l0_8r-6fb"/><path class="wm-a yakhjr-at"/></g>`,
		"fallback": "withicons:shuffle",
	});
}

export default Component;
