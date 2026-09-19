import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q1m15dbht.css';
import '../../css/a/aug2f2-rh.css';
import '../../css/k/khce2sbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><circle class="q1m15dbht"/><path class="aug2f2-rh"/><path class="khce2sbtm"/></g>`,
		"fallback": "hugeicons:pie-chart-06",
	});
}

export default Component;
