import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki3sfflmm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki3sfflmm"/>`,
		"fallback": "dinkie-icons:uni7981-box",
	});
}

export default Component;
