import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohqvfublv.css';
import '../../css/n/ne_bo7bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ohqvfublv"/><path class="ne_bo7bej"/></g>`,
		"fallback": "hugeicons:login-circle-02",
	});
}

export default Component;
