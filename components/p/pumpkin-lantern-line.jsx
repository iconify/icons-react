import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc2_9ibwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc2_9ibwj"/>`,
		"fallback": "mingcute:pumpkin-lantern-line",
	});
}

export default Component;
