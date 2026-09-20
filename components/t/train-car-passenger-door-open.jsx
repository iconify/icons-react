import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fykkjg8af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fykkjg8af"/>`,
		"fallback": "mdi:train-car-passenger-door-open",
	});
}

export default Component;
