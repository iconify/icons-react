import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plln0276b.css';
import '../../css/t/tiviyrbop.css';
import '../../css/w/wc-swabbr.css';
import '../../css/q/qhmcjtbas.css';
import '../../css/c/c6hjxwbap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plln0276b"/><path class="tiviyrbop"/><path class="wc-swabbr"/><path class="qhmcjtbas"/><path class="c6hjxwbap"/>`,
		"fallback": "energy-icons:timeline-48",
	});
}

export default Component;
