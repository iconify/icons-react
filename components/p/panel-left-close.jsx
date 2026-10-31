import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjijfobyz.css';
import '../../css/x/x2jyy4bto.css';
import '../../css/h/hxu7mzb1q.css';
import '../../css/g/gs7jtdb3w.css';
import '../../css/n/nlo3h95jx.css';
import '../../css/f/f03cknrbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjijfobyz wm-k"/><path class="wm-a x2jyy4bto"/><path class="hxu7mzb1q wm-k"/><path class="gs7jtdb3w wm-a"/><path class="nlo3h95jx wm-shadow"/><path class="f03cknrbv wm-shine"/></g>`,
		"fallback": "withicons-valentine:panel-left-close",
	});
}

export default Component;
