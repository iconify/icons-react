import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m2ttqfb1b.css';
import '../../css/g/givoivb6v.css';
import '../../css/u/u7dmb9f4q.css';
import '../../css/c/cdspdwk1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="m2ttqfb1b"/><path class="givoivb6v"/><path class="u7dmb9f4q"/><path class="cdspdwk1m"/></g>`,
		"fallback": "streamline-plump-color:warning-diamond",
	});
}

export default Component;
