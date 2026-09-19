import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpu9l9bsd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpu9l9bsd"/>`,
		"fallback": "cryptocurrency:ltc",
	});
}

export default Component;
