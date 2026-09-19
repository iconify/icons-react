import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0zc6hbsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0zc6hbsr"/>`,
		"fallback": "carbon:triangle-outline",
	});
}

export default Component;
