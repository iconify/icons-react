import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/p/pfgaa_beq.css';
import '../../css/q/qg_9ldbnq.css';
import '../../css/h/hn0b4he8s.css';
import '../../css/y/yh3am-32x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e77ebfb5e"/><path class="pfgaa_beq"/><path class="qg_9ldbnq"/><path class="hn0b4he8s"/><path class="yh3am-32x"/></g>`,
		"fallback": "iconaut:square-padding",
	});
}

export default Component;
