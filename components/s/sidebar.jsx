import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjijfobyz.css';
import '../../css/h/hxu7mzb1q.css';
import '../../css/n/nlo3h95jx.css';
import '../../css/o/ovh_y15az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjijfobyz wm-k"/><path class="hxu7mzb1q wm-k"/><path class="nlo3h95jx wm-shadow"/><path class="ovh_y15az wm-shine"/></g>`,
		"fallback": "withicons-valentine:sidebar",
	});
}

export default Component;
