import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/p2au79bps.css';
import '../../css/q/qple_7fyi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="p2au79bps"/><path class="qple_7fyi"/></g>`,
		"fallback": "streamline-plump:money-cash-bill-1",
	});
}

export default Component;
