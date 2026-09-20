import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h86oi0pod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h86oi0pod"/>`,
		"fallback": "thesvg-color:platformdotsh",
	});
}

export default Component;
