import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/h/h6z3hww3z.css';
import '../../css/a/apm68i00d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path class="h6z3hww3z"/><path class="apm68i00d"/></g>`,
		"fallback": "streamline-plump-color:man-arm-raises-2-alternate-flat",
	});
}

export default Component;
