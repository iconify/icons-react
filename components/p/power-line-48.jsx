import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbo4sbc_y.css';
import '../../css/o/oowff5lqf.css';
import '../../css/q/qs2b_84ps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbo4sbc_y"/><path class="oowff5lqf"/><path class="qs2b_84ps"/>`,
		"fallback": "energy-icons:power-line-48",
	});
}

export default Component;
