import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4447fbqf.css';
import '../../css/t/tozua4tpq.css';
import '../../css/x/x2fxl6y7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4447fbqf"/><path class="tozua4tpq"/><path class="x2fxl6y7a"/>`,
		"fallback": "energy-icons:shield-x-48-bold",
	});
}

export default Component;
