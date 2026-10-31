import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mu3jqivbv.css';
import '../../css/e/e487-9bwl.css';
import '../../css/v/vxl20rsou.css';
import '../../css/q/qd6c1mbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mu3jqivbv wm-shadow"/><path class="e487-9bwl wm-shadow"/><path class="vxl20rsou"/><path class="qd6c1mbjc wm-s"/></g>`,
		"fallback": "withicons-brutal:oven",
	});
}

export default Component;
