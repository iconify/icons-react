import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8d66nlfs.css';
import '../../css/p/phox42bnd.css';
import '../../css/r/rmb7iccqj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8d66nlfs"/><path class="phox42bnd"/><path class="rmb7iccqj"/>`,
		"fallback": "energy-icons:monitor-off-48-bold",
	});
}

export default Component;
