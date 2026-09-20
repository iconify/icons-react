import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q50r76h_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q50r76h_m"/>`,
		"fallback": "ri:route-line",
	});
}

export default Component;
