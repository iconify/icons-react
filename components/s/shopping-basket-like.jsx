import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9ex4pjbc.css';
import '../../css/r/rvb6adcua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9ex4pjbc"/><path class="rvb6adcua"/>`,
		"fallback": "streamline-freehand:shopping-basket-like",
	});
}

export default Component;
