import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p95tf12xy.css';
import '../../css/e/eztykdbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p95tf12xy"/><path class="eztykdbtr"/></g>`,
		"fallback": "covid:social-distancing-2",
	});
}

export default Component;
