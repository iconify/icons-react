import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2so68b_t.css';
import '../../css/y/ydx5-5bqk.css';
import '../../css/t/tzhs9kbdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2so68b_t"/><path class="ydx5-5bqk"/><path class="tzhs9kbdj"/>`,
		"fallback": "energy-icons:salt-cavern-48",
	});
}

export default Component;
