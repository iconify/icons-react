import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpx_mobwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpx_mobwm"/>`,
		"fallback": "mingcute:route-line",
	});
}

export default Component;
