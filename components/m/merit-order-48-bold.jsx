import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/a/abemn0b1q.css';
import '../../css/z/zfdgkmbxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="abemn0b1q"/><path class="zfdgkmbxx"/>`,
		"fallback": "energy-icons:merit-order-48-bold",
	});
}

export default Component;
