import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcke4yb4t.css';
import '../../css/g/gdu4k7b7m.css';
import '../../css/l/lppnqit-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcke4yb4t"/><path class="gdu4k7b7m"/><path class="lppnqit-l"/>`,
		"fallback": "energy-icons:not-gate-48",
	});
}

export default Component;
