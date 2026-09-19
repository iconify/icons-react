import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxmj7wz7k.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxmj7wz7k"/>`,
		"fallback": "fa6-solid:sim-card",
	});
}

export default Component;
