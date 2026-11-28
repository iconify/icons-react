import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzkbm7b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzkbm7b0i"/>`,
		"fallback": "noviair-light:lightbulb-check",
	});
}

export default Component;
