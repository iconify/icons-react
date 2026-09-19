import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q1m15dbht.css';
import '../../css/h/hh5vpobvk.css';
import '../../css/l/l42-reayn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><circle class="q1m15dbht"/><path class="hh5vpobvk"/><path class="l42-reayn"/></g>`,
		"fallback": "hugeicons:pie-chart-08",
	});
}

export default Component;
