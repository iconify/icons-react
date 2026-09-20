import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf5_y917j.css';
import '../../css/u/ub1z-yb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf5_y917j"/><path class="ub1z-yb9r"/>`,
		"fallback": "uim:lock-open-alt",
	});
}

export default Component;
