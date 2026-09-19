import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk6ttvbnd.css';
import '../../css/q/qx6xq3b3x.css';
import '../../css/p/pp6vxiujp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk6ttvbnd"/><path class="qx6xq3b3x"/><circle class="pp6vxiujp"/>`,
		"fallback": "circum:square-alert",
	});
}

export default Component;
