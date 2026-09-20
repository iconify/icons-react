import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m66i2jztc.css';
import '../../css/e/e__fwbcqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m66i2jztc"/><path class="e__fwbcqz"/></g>`,
		"fallback": "streamline-sharp:lasso-tool",
	});
}

export default Component;
