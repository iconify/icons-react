import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygn31xzau.css';
import '../../css/x/xw5_61bwy.css';
import '../../css/q/qgrtu-b6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygn31xzau"/><path class="xw5_61bwy"/><path class="qgrtu-b6i"/>`,
		"fallback": "energy-icons:small-wind-turbine-48",
	});
}

export default Component;
