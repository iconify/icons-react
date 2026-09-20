import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h8ew4ljfb.css';
import '../../css/f/fo3ur6s7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="h8ew4ljfb"/><path class="fo3ur6s7p"/></g>`,
		"fallback": "streamline-plump-color:loading-horizontal-2",
	});
}

export default Component;
