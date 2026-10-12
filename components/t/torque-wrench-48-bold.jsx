import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7he9kybi.css';
import '../../css/r/rayd8obar.css';
import '../../css/p/pq2cdhyot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7he9kybi"/><path class="rayd8obar"/><path class="pq2cdhyot"/>`,
		"fallback": "energy-icons:torque-wrench-48-bold",
	});
}

export default Component;
