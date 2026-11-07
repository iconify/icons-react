import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olusrszwm.css';
import '../../css/p/p5cc5fbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olusrszwm"/><path class="p5cc5fbot"/>`,
		"fallback": "solar:logout-2-outline",
	});
}

export default Component;
