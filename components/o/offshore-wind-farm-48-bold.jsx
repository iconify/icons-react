import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irdzk0b2o.css';
import '../../css/e/e11sb3kvn.css';
import '../../css/q/qe5nlvbiz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irdzk0b2o"/><path class="e11sb3kvn"/><path class="qe5nlvbiz"/>`,
		"fallback": "energy-icons:offshore-wind-farm-48-bold",
	});
}

export default Component;
