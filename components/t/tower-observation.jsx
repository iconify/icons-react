import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk2yh9xdu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk2yh9xdu"/>`,
		"fallback": "roentgen:tower-observation",
	});
}

export default Component;
