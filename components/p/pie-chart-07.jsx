import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/q1m15dbht.css';
import '../../css/i/ip3r7pbcg.css';
import '../../css/i/i901tdcne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><circle class="q1m15dbht"/><path class="ip3r7pbcg"/><path class="i901tdcne"/></g>`,
		"fallback": "hugeicons:pie-chart-07",
	});
}

export default Component;
