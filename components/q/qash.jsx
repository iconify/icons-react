import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea1-t_1gy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea1-t_1gy"/>`,
		"fallback": "cryptocurrency:qash",
	});
}

export default Component;
