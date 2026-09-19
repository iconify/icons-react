import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qwm7lubzv.css';
import '../../css/w/wrj168mpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qwm7lubzv"/><path class="wrj168mpe"/></g>`,
		"fallback": "hugeicons:watermelon",
	});
}

export default Component;
