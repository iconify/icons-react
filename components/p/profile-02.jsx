import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wq7ql5aqb.css';
import '../../css/j/ju26b1bmr.css';
import '../../css/n/njt-x4eke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wq7ql5aqb"/><path class="ju26b1bmr"/><path class="njt-x4eke"/></g>`,
		"fallback": "hugeicons:profile-02",
	});
}

export default Component;
