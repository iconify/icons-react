import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjijfobyz.css';
import '../../css/y/yn5oipiyi.css';
import '../../css/h/hxu7mzb1q.css';
import '../../css/o/ora3-cbmu.css';
import '../../css/n/nlo3h95jx.css';
import '../../css/y/y4rzzpv2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjijfobyz wm-k"/><path class="wm-a yn5oipiyi"/><path class="hxu7mzb1q wm-k"/><path class="ora3-cbmu wm-a"/><path class="nlo3h95jx wm-shadow"/><path class="wm-shine y4rzzpv2l"/></g>`,
		"fallback": "withicons-valentine:panel-left-open",
	});
}

export default Component;
